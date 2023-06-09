import mongoose from "mongoose";
import validator from "validator";

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

export default mongoose.model('User', UserSchema)