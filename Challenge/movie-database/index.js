const express = require("express");
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("OK");
});
server.listen(3000, "127.0.0.1", () => {
  console.log("server running .......");
});
