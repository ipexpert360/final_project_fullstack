import User from "../models/userModel.js";
const register = async (req, res) =>{
    const {fname,lname,email,password}=req.body;
    if (!fname||!lname||!email||!password){
        return res.status(400).json({message:"Please fill"})
    }
    try {
        const user=await User.findOne({email})
        if(user){
            return res.status(400).send("Email already exists")
        }
    User.create({
        fname: "John",
        lname: "Doe",
        email: "ipexpert360@gmail.com",
        password: "passworD"
    })

res.send('I was sussfull')
} catch (error) {
    res.status(500).send(error)
    console.log(error)
};
    }
export default register;