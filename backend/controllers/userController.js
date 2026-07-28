const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel");
const dotenv = require('dotenv')
dotenv.config()


 const createToken = (id)=>{
  return jwt.sign({id},
    process.env.JWT_SECRET,{
      expiresIn:"3h"
    })
 }

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = createToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
       user: {
    _id: user._id,
    name: user.name,
    email: user.email,
  },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const registerUser = async (req, res) => {
  try {
    const { name, email, password ,confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Already Exists",
      });
    }
      //validating email &password

    if(!validator.isEmail(email)){
      return res.status(400).json({
         success:false,
        message:"Invalid Email !!!"
      })
    }

    if(password.length < 8){
      return res.status(400).json({
        success:false,
        message:"Please enter a strong password !!!"
      })
    }


    //hashing password
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({
      name,
      email,
      password:hashedPassword,
    });
     
    const token = createToken(user._id)
    res.json({
      message:"successfully Registered",
      success:true,
      token,
    })
   
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


//ROUTE FOR ADMIN LOGIN
const adminLogin = async(req,res)=>{
 try{
    const{email,password} = req.body

  if(email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign({role:"admin"}, process.env.JWT_SECRET,
      { expiresIn: "4h" })
      res.status(200).json({
        success:true,
        message: "Admin login successful",
        token
      })
    }else{
        return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

  
 }catch(error){
    res.status(500).json({
      success: false,
      message: error.message,
    });
 }
}


module.exports = {
    registerUser,
    loginUser,
    adminLogin,
}