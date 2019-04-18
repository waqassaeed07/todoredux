var express = require("express");
var app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://waqassaeed:waaqas33100.@waqassaeed-pkhh0.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log("err", err);
    } else {
      console.log("successfully connected");
    }
  }
);












app.listen(8080, function() {
    console.log("express server running on port 8080");
  });