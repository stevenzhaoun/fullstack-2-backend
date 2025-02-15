import { Request, Response } from "express";
import prisma from "../prismaClient";
import { compareSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from "../config";


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
        where: {
            email: email
        },
        include: {
            password: true,
            role: true
        }
    })

    if(!user || !user.password) {
        res.status(404).send('Failed to login')
        return
    }
    
    if(!compareSync(password, user?.password?.hash)) {
        res.status(401).send('Invalid credentials')
        return
    }

    const userPayload= {
        userId: user.id,
        roleId: user.role?.id,
    }

    const token = jwt.sign(userPayload, config.jwtSecret, { expiresIn: '1d' })

    res.status(200).json({
        token: token,
        userId: user.id,
        name: user.name,
        email: user.email,
        roleId: user.role?.id
    })

}