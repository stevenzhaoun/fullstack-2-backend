import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const listProducts = async (req: Request, res: Response) => {
    const products = await prisma.product.findMany()
    res.status(200).json(products)
    return
}

export const getProductById = async (req: Request, res: Response) => {
    const product = await prisma.product.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })
    if(!product) {
        res.status(404).json({ message: 'Product not found' })
        return
    }
    res.status(200).json(product)
    return
}

export const createProduct = async (req: Request, res: Response) => {
    const newProduct = await prisma.product.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    })
    res.status(201).json(newProduct)
    return
}