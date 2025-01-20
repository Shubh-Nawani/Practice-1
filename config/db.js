const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://shunaw2006:CKPyYJJNLXEHyAPl@cluster0.2e5ov.mongodb.net/Practice-1")
        console.log("MongoDB is connected!")
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB
