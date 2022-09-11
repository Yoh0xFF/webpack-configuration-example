const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  const htmlPath = path.resolve(__dirname, "../dist/hello-world.html");
  const html = fs.readFileSync(htmlPath, "utf-8");
  res.send(html);
});

app.listen(9001, () => {
  console.log("Application is running on http://localhost:9001/");
});
