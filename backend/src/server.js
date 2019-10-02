const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://fabriciobedin:muzc7aFMsdL7LcF@cluster0-omqgq.mongodb.net/cowork?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(routes);

app.listen(3000);
