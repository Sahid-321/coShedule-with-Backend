const postModal = require('../Database/task');
const jwt = require('jsonwebtoken');

const getalltask = async (req,res)=>{
try {
    const {token} = req.headers;
    let user = jwt.decode(token)
    const post = await postModal.find({user})
    return res.status(200).send(post);
} catch (error) {
    return res.status(500).send({message: error.message});
}
}

const createtask = async (req,res)=>{
    try {
        const {token} = req.headers;
        let user = jwt.decode(token);
        let note = req.body;
    
        note = new postModal(note);
        await note.save();
        console.log(note)
        return res.status(200).send(note);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}


module.exports = {
    getalltask,
    createtask
}