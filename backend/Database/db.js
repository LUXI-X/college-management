require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://tejpalsinghroyalbanna12:jx6tyPM67HuaezGS@cluster0.slb5ctk.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = connectToMongo;
