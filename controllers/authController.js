import User from "../models/User.js";
import {StatusCodes} from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'

const register = async(req, res, next) => {
  // req.body has all the values
  const {name, email,password} = req.body

  // error for empty value
  if(!name || !email || !password) {
    throw new BadRequestError ('please provide all values')
  }

  // iterate through database to find if there is duplicate email
  const userAlreadyExist = await User.findOne({email});
  if (userAlreadyExist) {
    throw new BadRequestError('Email already in use')
  }

// CREATE USER
  const user = await User.create({ name, email, password});
  user.createJWT(); // custom method from UserSchema
  // response
  res.status(StatusCodes.OK).json({user});
}

// LOGIN
const login = async (req,res) => {
  res.send('login user');
}

// UPDATE USER
const updateUser= async (req,res) => {
  res.send('update user');
}

export {register, login, updateUser}