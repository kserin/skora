const express = require('express');
const app = express();
const path = require('path');
const { setTimeout } = require('timers');

function delayedResponse(res, file) {
  setTimeout(() => {
    res.status(200).sendFile(path.resolve(file));
  }, 1500);
}

app.get("/api/girls", (req, res) => {
  delayedResponse(res, "testserver/girls.json");
});

app.get(/.*\.(js|css|html)$/, (req, res) => {
  const pathParts = req.path.split("/");
  console.log(pathParts);
  res.status(200).sendFile(path.resolve(`dist/${pathParts[pathParts.length - 1]}`));
});

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve("dist/index.html"));
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});