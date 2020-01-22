const express = require("express");
const dev = express();
const PORT = 3000;
dev.get("url", (req, res) => {
  res.send("OK");
});
dev.listen(PORT, () => {
  console.log(`OK`);
});
