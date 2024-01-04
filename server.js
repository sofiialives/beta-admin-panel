const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(8000, () => {
      console.log("Mongoose is connected");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
