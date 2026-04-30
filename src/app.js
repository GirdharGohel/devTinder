const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

//Handle auth middleware for all GET, POST, etc requests
app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("All data delete");
});

app.listen(3500, () => {
  console.log("server is successfully listening on port 3500...");
});
