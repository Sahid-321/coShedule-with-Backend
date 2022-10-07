const mongoose = require('mongoose')

const task =new mongoose.Schema({
    title :{
        type : String
    },
    description : String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{
    
    timestamps: true
})

const postModal = mongoose.model("task",task);

module.exports = postModal