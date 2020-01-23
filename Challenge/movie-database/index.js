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

server.listen(3000, "127.0.0.1", () => {
  console.log("server running .......");
});
