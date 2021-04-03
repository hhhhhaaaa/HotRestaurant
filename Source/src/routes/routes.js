const express = require('express');
const path = require('path');

const router = express();

const crudRoutes = require("./crudRoutes.js");
const htmlRoutes = require("./htmlRoutes.js");

router.use("/", crudRoutes);
router.use("/", htmlRoutes);

module.exports = router;