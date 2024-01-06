const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const sushiSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for sushi"],
    },
    text: {
      type: String,
      required: [true, "Set text for sushi"],
    },
    price: {
      type: String,
      required: [true, "Set price for sushi"],
    },
    img: {
      type: String,
      required: [true, "Set img for sushi"],
    },
  },
  { versionKey: false }
);

sushiSchema.post("save", handleMongooseError);

const Sushi = model("sushi", sushiSchema);

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  text: Joi.string()
    .required()
    .messages({ "any.required": "missing required text field" }),
  price: Joi.string()
    .required()
    .messages({ "any.required": "missing required price field" }),
  img: Joi.string()
    .required()
    .messages({ "any.required": "missing required img field" }),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3),
  text: Joi.string(),
  price: Joi.string(),
  img: Joi.string(),
})
  .min(1)
  .messages({ "object.min": "missing fields" });

const schema = {
  addSchema,
  updateSchema,
};

module.exports = {
  schema,
  Sushi,
};
