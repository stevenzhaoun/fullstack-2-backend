import { Request, Response } from "express";
import prisma from "../prismaClient";

export const listPermissions = async (req: Request, res: Response) => {
    const permissions = await prisma.permission.findMany()

    res.json(permissions);
}