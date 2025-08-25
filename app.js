const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res) => {
    res.status(404).send("Error 404, page not found");
});