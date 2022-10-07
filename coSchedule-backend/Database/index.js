const mongoose = require('mongoose')

async function connectDatabase(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/task")
        console.log("connect");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDatabase