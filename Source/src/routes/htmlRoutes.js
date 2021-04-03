const express = require('express');
const path = require('path');

const router = express();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

router.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/tables.html"));
});

router.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/reserve.html"));
});

module.exports = router;