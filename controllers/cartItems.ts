import { RequestHandler } from 'express'; 
import prisma from "../prisma";
import dotenv  from "dotenv";

export const createCartItem:RequestHandler = async (req, res, next) => {

    try {
      let newCartItem = await prisma.cartItem.create({
        data: {
          "cartId": req.body.cartId,
          "productId": req.body.productId, 
          "quantity": req.body.quantity
        }
      })
    
      res.status(200).json({ "newCartItem": newCartItem });
    } catch (err){
      res.send({ "error: ": err })
    }
  }

  export const getCartItems: RequestHandler = async (req, res, next) => {
    try {
      const cartItems = await prisma.cartItem.findMany(); 
      res.status(200).json({ "cartItems": cartItems });
    } catch (err){
      res.send({ "error: ": err })
    }
  }