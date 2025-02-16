import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import config from "../config";


const NO_AUTH_PATHS = ['/auth/login']

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    if(NO_AUTH_PATHS.includes(req.path)) {
        next()
        return
    }
    const authorizationHeader = req.header('Authorization')
    const token = authorizationHeader?.split(' ')[1]

    if(!token) {
        res.status(401).send('Unauthorized')
        return 
    }

    try {
        const decodedData: any = jwt.verify(token, config.jwtSecret);
        
        (req as any).userId = decodedData.userId;
        (req as any).roleId = decodedData.roleId;
        next()
    } catch (error) {
        console.log('authentication error', error)
        res.status(401).send('Unauthorized')
        return 
    }
}