const User = require("../models/userModel.js")
const signup = async (req, res) => {
    try {
        const {name, email, password, dateOfBirth} = req.body;
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).send("User already exists")
        }
        const newUser = new User({
            name,
            email,
            password,
            dateOfBirth,
        })
        await newUser.save()
        res.send("User created successfully")
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = signup