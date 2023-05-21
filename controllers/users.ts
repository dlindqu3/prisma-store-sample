import { RequestHandler } from 'express'; 
require('dotenv').config();
import axios from 'axios'; 

export const createUser:RequestHandler = async (req, res, next) => {
  let newObj = {
      username: req.body.username,
      email: req.body.email, 
      password: req.body.password
    }   
  
    res.status(200).json({ "test": "createUser" });
}

export const getUsers: RequestHandler = async (req, res, next) => {

  res.status(200).json({ "test": "getUsers" });
}

export const getUser: RequestHandler = async (req, res, next) => {

  res.status(200).json({ "test": "getUser" });
}
