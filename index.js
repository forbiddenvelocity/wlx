const express = require('express');
const dBConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const app = express()
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000
dBConnect();
app.use(bodyParser.json())
app.use('/', (req, res) => {
    res.send("Hello World");
})
app.use("/api/user", authRouter)
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})