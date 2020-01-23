const express = require("express");
const server = express();
let date_ob = new Date();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let time = hours + ":" + minutes;
server.get("/test", (req, res) => {
  res.json({
    status: 200,
    message: "ok"
  });
});
server.get("/time", (req, res) => {
  res.json({
    status: 200,
    message: time
  });
});
server.get("/hello/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    status: 200,
    message: "hello , " + id
  });
});
server.get("/search", (req, res) => {
  if (req.query.s) {
    res.json({
      status: 200,
      message: "OK",
      data: req.query.s
    });
  } else {
    res.json({
      status: 500,
      message: "you have to provide a search",
      error: true
    });
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server running .......");
});
