const SECREAT = require('../connect/secreat')
const userModal = require('../Database/user')
const jwt = require('jsonwebtoken');

const signUpFn = async (req,res)=>{
    try {
        const newUser = req.body
        console.log(newUser)
        const checkUser  = await userModal.findOne({email : newUser.email});
        
      if(checkUser){
        res.status(400).send({message :'User already exist!'})
      }
       let user = new userModal(newUser);
       await user.save();
       user = user.toJSON();
        delete user.password;
        res.status(200).send(user)

    } catch (error) {
        return res.status(500).send({message: error.message});   
     }
}

const loginFn = async (req,res)=>{
    try {
        const {email, password} = req.body;
        let user = await userModal.findOne({email},{name : 1}).populate('password');
        // console.log(user);
        if (!user) {
            return res.status(400).send({message: 'User does not exist'});
        }
        else{
            if(user.password === password){
                console.log(user)
                const token = jwt.sign({email: user.email,id: user._id,name: user.name}, SECREAT);

                return res.status(200).send({message : "Login successs" ,token,user});
            }
            else{
                return res.status(400).send({message: 'Password is incorrect'});
            }
        }
        
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}

const checkUserByToken = async (req, res) => {
    try {
        let {token} = req.headers;
        let decoded = jwt.verify(token, SECREAT);
        if(decoded){
            return res.status(200).send({token});
        }
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}





module.exports = {
    signUpFn,
    loginFn,
    checkUserByToken
}