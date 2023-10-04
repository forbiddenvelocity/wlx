const express = require('express');
const dBConnect = require('./config/dbConnect');
const authRouter = require('./routers/authRoute')
const bodyParser = require('body-parser');
const app = express()
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000
dBConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use("/api/user", authRouter)
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})