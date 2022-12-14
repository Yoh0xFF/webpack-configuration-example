const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  const htmlPath = path.resolve(__dirname, "../dist/logo-image.html");
  const html = fs.readFileSync(htmlPath, "utf-8");
  res.contentType("text/html; charset=utf-8");
  res.send(html);
});

app.listen(9002, () => {
  console.log("Application is running on http://localhost:9002/");
});
