const express = require("express");
const server = express();
let date_ob = new Date();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let time = hours + ":" + minutes;

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

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

server.get("/movies/create", (req, res) => {
  res.json({
    status: 200,
    message: "hello , " + id
  });
});

server.get("/movies/read", (req, res) => {
  res.json({
    status: 200,
    data: movies
  });
});
server.get("/movies/read/by-date", (req, res) => {
  res.json({
    status: 200,
    data: movies.sort((a, b) => {
      return a.year - b.year;
    })
  });
});
server.get("/movies/read/by-rating", (req, res) => {
  res.json({
    status: 200,
    data: movies.sort((a, b) => {
      return b.rating - a.rating;
    })
  });
});

server.get("/movies/read/by-title", (req, res) => {
  res.json({
    status: 200,
    data: movies.sort()
  });
});

server.get("/movies/read/id/:id", (req, res) => {
  let index = parseInt(req.params.id);
  if (index < movies.length) {
    res.json({
      status: 200,
      data: movies[index]
    });
  } else {
    res.json({
      status: 404,
      error: true,
      message: "the movie +" + index + " does not exist"
    });
  }
});

server.get("/movies/update", (req, res) => {
  res.json({
    status: 200,
    message: "hello , " + id
  });
});

server.get("/movies/delete", (req, res) => {
  res.json({
    status: 200,
    message: "hello"
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server running .......");
});
