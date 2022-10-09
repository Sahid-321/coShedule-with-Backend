const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        select: false
    }
    },{
        timestamps: true
});

const userModal = mongoose.model("user",userSchema)

module.exports = userModal