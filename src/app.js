const express = require("express");

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    console.log("handling the route user!");
    // res.send("I am response 1");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user 2!!");
    // res.send("I am response 2");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user 3!!!");
    // res.send("I am response 3");
    next();
  },
  (req, res, next) => {
    console.log("handling the route user 4!!!!");
    // res.send("I am response 4");
    next();
  },
  (req, res, next) => {
    console.log("handling the route response 5 !!!!!!");
    res.send("I am response 5");
  },
);

// This will handle only get call to user
// app.get("/user", (req, res) => {
//   res.send({ firsname: "Girdhar", lastname: "Gohel" });
// });

app.post("/user", (req, res) => {
  res.send("Data saved successfully to the database");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted successfully");
});

// app.use("/user", (req, res) => {
//   res.send("default for handling url");
// });

// This will match all the HTTP method API calls to /test
// app.use("/test", (req, res) => {
//   res.send("Hi, I am tester tester!");
// });

// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({ firsname: "Girdhar" });
// });

// app.use("/", (req, res) => {
//   res.send("Hello World...!");
// });

app.listen(3500, () => {
  console.log("server is successfully listening on port 3500...");
});
