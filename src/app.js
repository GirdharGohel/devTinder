const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    // log your error
    res.status(500).send("something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  // try {
  // logic of DB call and get user data

  throw new Error("fasdfsafs");
  res.send("user data sent");
  // } catch (err) {
  //   res.status(500).send("some error occured please contact support");
  // }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // log your error
    res.status(500).send("something went wrong");
  }
});

app.listen(3500, () => {
  console.log("server is successfully listening on port 3500...");
});
