import { RequestHandler } from 'express'; 
import prisma from "../prisma";
import dotenv  from "dotenv";

export const createProduct:RequestHandler = async (req, res, next) => {

    try {
      let newProduct = await prisma.product.create({
        data: {
          "name": req.body.name,
          "image": req.body.image,
          "description": req.body.description,
          "brand": req.body.brand,  
          "category": req.body.category,
          "price": req.body.price
        }
      })
    
      res.status(200).json({ "newProduct": newProduct });
    } catch (err){
      res.send({ "error: ": err })
    }
  }

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany(); 
    res.status(200).json({ "products": products });
  } catch (err){
    res.send({ "error: ": err })
  }
}


export const getProduct: RequestHandler = async (req, res, next) => {
  try {
    let product = await prisma.product.findUnique({
      where: {
        "id": req.body.productId
      }
    })
  
    res.status(200).json({ "product": product });
  } catch (err){
    res.send({ "error: ": err })
  }
}


export const updateProduct: RequestHandler = async (req, res, next) => {
  
  let fieldsToUpdate = req.body

  try {
    let updatedProduct = await prisma.product.update({
      where: {
        id: parseInt(req.params.productId)
      },
      data: fieldsToUpdate,
    })
  
    res.status(200).json({ "updatedProduct": updatedProduct });
  } catch (err){
    res.send({ "error: ": err })
  }
}


export const deleteProduct: RequestHandler = async (req, res, next) => {
  
  try {
    let deletedProduct = await prisma.product.delete({
      where: {
        id: parseInt(req.params.productId),
      }
    })
  
    res.status(200).json({ "deletedProduct": deletedProduct });
  } catch (err){
    res.send({ "error: ": err })
  }
}