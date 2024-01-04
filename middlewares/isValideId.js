const { isValidObjectId } = require("mongoose");
const { httpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { sushiId } = req.params;
  if (!isValidObjectId(sushiId)) {
    next(httpError(400, `${sushiId} is not a valid`));
  }
  next();
};

module.exports = isValidId;
