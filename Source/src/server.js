// Dependencies
const express = require('express');
const path = require('path');
const assetsHTML = express.static(path.join(__dirname, "../dist"));
const assetsJS = express.static(path.join(__dirname, "../lib"));

const routes = require("./routes/routes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(assetsHTML);
app.use(assetsJS);
app.use("/", routes);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));