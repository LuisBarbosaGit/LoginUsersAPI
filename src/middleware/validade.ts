
import jwt, {JwtPayload} from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
import { error } from 'console';

dotenv.config()

declare global {
    namespace Express {
      interface Request {
        user?: JwtPayload;
      }
    }
}

export interface UserPayload {
    id: number;
    email: string;
  }

const JWT_SECRET = process.env.JWT_SECRET!

export function validateUser(schema: any){
    return (req: Request, res : Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        
        } catch (error) {
            res.status(400).send({success: false, errors: error})
        }
    } 
}
export function geraToKen(user : UserPayload) : string{
    const payload: UserPayload = {
        id: user.id,
        email: user.email
    }
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET,{ expiresIn: '4h' })
        return token;
}

export const auth = (req: Request, res:Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
             res.status(400).send({
             success: false,
             message: "Token não fornecido"
            });
            return;
        }
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
        (req as any).user = decoded
        next(); 
    }catch (error) {
        res.status(400).send({
        success: false,
        errors: error
        });
    }

} 





/*
sessionStorage.setItem('token', token);
const token = sessionStorage.getItem('token');
sessionStorage.removeItem('token');
*/