import { RequestHandler } from 'express'; 
import prisma from "../prisma";
import dotenv  from "dotenv"
import axios from 'axios'; 


export const createUser:RequestHandler = async (req, res, next) => {

  // let bodyType = typeof(req.body);
  
  let newUser = await prisma.user.create({
    data: {
      "username": req.body.username,
      "email": req.body.email,
      "password": req.body.password
    }
  })

  res.status(200).json({ "newUser": newUser });
}

export const getUsers: RequestHandler = async (req, res, next) => {

  res.status(200).json({ "test": "getUsers" });
}

export const getUser: RequestHandler = async (req, res, next) => {

  res.status(200).json({ "test": "getUser" });
}
