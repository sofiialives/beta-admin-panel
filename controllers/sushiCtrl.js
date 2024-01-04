const { ctrlWrapper, httpError } = require("../helpers");

const { Sushi } = require("../models/sushiModels");

const listSushi = async (req, res) => {
  const result = await Sushi.find();
  res.json(result);
};

const getSushiById = async (req, res) => {
  const { sushiId } = req.params;
  const result = await Sushi.findById(sushiId);
  res.json(result);
};

const addSushi = async (req, res) => {
  const result = await Sushi.create(req.body);
  res.status(201).json(result);
};

const deleteSushi = async (req, res) => {
  const { sushiId } = req.params;
  const result = await Sushi.findByIdAndDelete(sushiId);
  if (!result) {
    throw httpError(404, "Not Found");
  }
  res.json({
    message: "sushi is deleted",
  });
};

const updateSushi = async (req, res) => {
  const { sushiId } = req.params;
  const result = await Sushi.findByIdAndUpdate(sushiId, req.body, {
    new: true,
  });
  if (!result) {
    throw httpError(404, "Not Found");
  }
  res.json(result);
};

module.exports = {
  listSushi: ctrlWrapper(listSushi),
  getSushiById: ctrlWrapper(getSushiById),
  addSushi: ctrlWrapper(addSushi),
  deleteSushi: ctrlWrapper(deleteSushi),
  updateSushi: ctrlWrapper(updateSushi),
};
