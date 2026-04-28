const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Namaste Duniya!");
});

app.use("/next", (req, res) => {
  res.send("now I am trying to refresh without nodemon");
});

app.use("/test", (req, res) => {
  res.send("Hi I am tester tester tester");
});

app.listen(3500, () => {
  console.log("server is successfully listening on port 3500...");
});
