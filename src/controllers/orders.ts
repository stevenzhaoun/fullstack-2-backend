import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const listOrders = async (req: Request, res: Response) => {
    const orders = await prisma.order.findMany({
        include: {
            products: true
        }
    })
    res.status(200).json(orders)
    return
}

export const getOrderById = async (req: Request, res: Response) => {
    const order = await prisma.order.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            products: true
        }
    })
    if(!order) {
        res.status(404).json({ message: 'Order not found' })
        return
    }
    res.status(200).json(order)
    return
}

export const createOrder = async (req: Request, res: Response) => {
    const newOrder = await prisma.order.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            total: req.body.total,
            createdAt: req.body.createdAt ? new Date(req.body.createdAt) : new Date(),
            products: {
                connect: req.body.products.map((productId: number) => ({ id: productId }))
            }
        }
    })
    res.status(201).json(newOrder)
    return
}