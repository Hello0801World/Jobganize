import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt  from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String, 
    required:[true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim:true // trim extra space from start to end
  },
  email: {
    type: String, 
    required:[true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'please provide a valid email'
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select: false, 
  },
  lastName: {
    type: String, 
    maxlength: 20,
    trim:true, // trim extra space from start to end
    default: 'lastName',
  },
  location: {
    type: String, 
    maxlength: 20,
    trim:true, // trim extra space from start to end
    default: 'my city',
  },
})

UserSchema.pre('save', async function(){
  // create extra char for hashing (genSalt()). The longer a value in getSalt is, the better security
  const salt = await bcrypt.genSalt(10) 
  // hash 
  this.password = await bcrypt.hash(this.password, salt)
})

// JWT allows user to access only their applications 
// stores JWT in react state and local storage
// custom instance method to create JWT
UserSchema.methods.createJWT = function() {
  return jwt.sign({userId:this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

export default mongoose.model('User', UserSchema)