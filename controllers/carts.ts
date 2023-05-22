import { RequestHandler } from 'express'; 
import prisma from "../prisma";
import dotenv  from "dotenv";

export const createCart:RequestHandler = async (req, res, next) => {

    try {
      let newCart = await prisma.cart.create({
        data: {
          "userId": req.body.userId
        }
      })
    
      res.status(200).json({ "newCart": newCart });
    } catch (err){
      res.send({ "error: ": err })
    }
  }

export const getCarts: RequestHandler = async (req, res, next) => {
  try {
    const carts = await prisma.cart.findMany(); 
    res.status(200).json({ "carts": carts });
  } catch (err){
    res.send({ "error: ": err })
  }
}
  
export const getCartByUserId: RequestHandler = async (req, res, next) => {
  try {
    let cart = await prisma.cart.findUnique({
      where: {
        "userId": req.body.userId
      }
    })
  
    res.status(200).json({ "cart": cart });
  } catch (err){
    res.send({ "error: ": err })
  }
}

export const getCart: RequestHandler = async (req, res, next) => {
  try {
    let cart = await prisma.cart.findUnique({
      where: {
        "id": req.body.cartId
      }
    })
  
    res.status(200).json({ "cart": cart });
  } catch (err){
    res.send({ "error: ": err })
  }
}

export const updateCart: RequestHandler = async (req, res, next) => {
  
  let fieldsToUpdate = req.body

  try {
    let updatedCart = await prisma.cart.update({
      where: {
        id: parseInt(req.params.cartId)
      },
      data: fieldsToUpdate,
    })
  
    res.status(200).json({ "updatedCart": updatedCart });
  } catch (err){
    res.send({ "error: ": err })
  }
}


export const deleteCart: RequestHandler = async (req, res, next) => {
  
  try {
    let deletedCart = await prisma.cart.delete({
      where: {
        id: parseInt(req.params.cartId),
      }
    })
  
    res.status(200).json({ "deletedCart": deletedCart });
  } catch (err){
    res.send({ "error: ": err })
  }
}