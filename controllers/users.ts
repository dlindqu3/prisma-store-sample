import { RequestHandler } from 'express'; 
import prisma from "../prisma";
import dotenv  from "dotenv"


export const createUser:RequestHandler = async (req, res, next) => {

  try {
    let newUser = await prisma.user.create({
      data: {
        "username": req.body.username,
        "email": req.body.email,
        "password": req.body.password
      }
    })
  
    res.status(200).json({ "newUser": newUser });
  } catch (err){
    res.send({ "error: ": err })
  }
}

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany(); 
    res.status(200).json({ "users": users });
  } catch (err){
    res.send({ "error: ": err })
  }
}

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    let newUser = await prisma.user.findUnique({
      where: {
        "id": req.body.userId
      }
    })
  
    res.status(200).json({ "newUser": newUser });
  } catch (err){
    res.send({ "error: ": err })
  }
}

// update 
export const updateUser: RequestHandler = async (req, res, next) => {
  
  let fieldsToUpdate = req.body

  try {
    let updatedUser = await prisma.user.update({
      where: {
        id: req.params.userId,
      },
      data: fieldsToUpdate,
    })
  
    res.status(200).json({ "updatedUser": updatedUser });
  } catch (err){
    res.send({ "error: ": err })
  }
}

// delete 
export const deleteUser: RequestHandler = async (req, res, next) => {
  
  try {
    let deletedUser = await prisma.user.delete({
      where: {
        id: req.params.userId,
      }
    })
  
    res.status(200).json({ "deletedUser": deletedUser });
  } catch (err){
    res.send({ "error: ": err })
  }
}