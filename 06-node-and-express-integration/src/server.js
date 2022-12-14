const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  const htmlPath = path.resolve(__dirname, "../dist/index.html");
  const html = fs.readFileSync(htmlPath, "utf-8");
  res.send(html);
});

app.listen(3000, () => {
  console.log("Application is running on http://localhost:3000/");
});
