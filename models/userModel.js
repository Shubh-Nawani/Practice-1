const mongoose = require("mongoose")

function validatePassword(password) {
    return (
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    )
}

function validateAge(dateOfBirth) {
    const today = new Date().getFullYear();
    const birthYear = dateOfBirth.getFullYear();
    return today - birthYear >= 18;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: [/^[a-zA-Z]/, "Name must contain only letters"] 
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
        
        validate: {
            validator: validatePassword,
            message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    },
},
    dateOfBirth: {
        type: Date,
        required: true,
        validate: {
            validator: validateAge,
            message: "User must be at least 18 years old"
    }}
})

module.exports = mongoose.model("User", userSchema);