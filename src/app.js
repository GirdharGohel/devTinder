const express = require("express");

const app = express();

// This will handle only get call to user
app.get("/user", (req, res) => {
  res.send({ firsname: "Girdhar", lastname: "Gohel" });
});

app.post("/user", (req, res) => {
  res.send("Data saved successfully to the database");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted successfully");
});

app.use("/user", (req, res) => {
  res.send("default for handling url");
});

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hi, I am tester tester!");
});

// app.use("/", (req, res) => {
//   res.send("Hello World...!");
// });

app.listen(3500, () => {
  console.log("server is successfully listening on port 3500...");
});
