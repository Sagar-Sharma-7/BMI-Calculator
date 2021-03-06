const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

const filePath = path.dirname(__dirname + "../")
app.use(express.static(filePath));

app.listen(port, () => {
    console.log("Listening...")
});