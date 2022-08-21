const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/happy");

mongoose.connect(
  "mongodb+srv://97harishk:harish97@cluster0.q12ot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connection to mongodb"));

db.once("open", function () {
  console.log("Successfully connected to database");
});

module.exports = db;
