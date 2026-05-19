require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {

    res.send("LUCID Cam Server Running");

});


app.get("/api/key", (req, res) => {

    res.json({

        success: true,

        apiKey: process.env.DECART_API_KEY

    });

});


const PORT = 3000;

app.listen(PORT, () => {

    console.log(`LUCID Server running on port ${PORT}`);

});