import { Request, Response } from "express";
import prisma from "../prismaClient";
import { hashSync } from 'bcryptjs'

export const createUser = async (req: Request, res: Response) => {
    const newUser = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            role: {
                connect: {
                    id: req.body.roleId
                }
            },
            password: {
                create: {
                    hash: hashSync(req.body.password)
                }
            }
        }
    })
    res.status(201).json(newUser)
}

export const listUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    res.json(users)
}

export const getUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = await prisma.user.findFirst({
        where: {
            id: Number(userId)
        }
    })
    if (!user) {
        res.status(404).send('User not found')
    } else {
        res.status(200).json(user)
    }

}