const express = require("express")
const app = express()
const userRoute = require("./routes/userRoute.js")
const connectDB = require('./config/db.js')

app.use(express.json())

app.use('/api/user', userRoute)

app.post("/", (req, res) => {
    try {
        res.send("Hello World")
        console.log("My first test API is working")
    } catch (error) {
        res.status(500).send("Server Error")
    }
})

app.listen(8000, async() => {
    try {
        await connectDB();
        console.log("Listening on port 8000")
    } catch (error) {
        console.error("Server failed to start");
    }
})
