
import { Request, Response, NextFunction } from "express";




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