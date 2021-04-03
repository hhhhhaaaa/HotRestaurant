const express = require('express');
const path = require('path');

const router = express();

const reservations = [];
const waitlist = [];

router.get("/api/tables", (req, res) => {
    res.json(reservations);
});

router.post("/api/tables", (req, res) => {
    reservations.push(req.body);
    console.log("Reservation Sent");
    res.send(reservations);
});

router.get("/api/waitlist", (req, res) => {
    res.json(waitlist);
});

router.post("/api/waitlist", (req, res) => {
    res.json(waitlist);
});

module.exports = router;