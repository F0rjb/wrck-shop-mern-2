const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(process.env.mongourl);
    console.log("data base is connect");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connect;
