console.log("app is loading");
const express = require("express");
const path = require('path')
const app = express();
const cfg = require('./config/config.json')

const buildPath = path.join(__dirname, "client");
app.use(express.static(buildPath));


// --- handle all routes
app.get("*", (req, res) => {
    const indexHtmlPath = path.join(buildPath, "index.html");
    res.sendFile(indexHtmlPath);
  });

const PORT = cfg.port;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});