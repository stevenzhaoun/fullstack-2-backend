import { Request, Response } from "express";
import prisma from "../prismaClient";

export const listRoles = async (req: Request, res: Response) => {
    const roles = await prisma.role.findMany({
        include: {
            permissions: true
        }
    })

    res.json(roles);
}

export const createRole = async (req: Request, res: Response) => {
    console.log('req.body', req.body.permissions)
    const newRole = await prisma.role.create({
        data: {
            name: req.body.name,
            permissions: {
                connect: req.body.permissions.map((p: string) => ({name: p}))
            }
        }
    })
    res.status(201).json(newRole)
}