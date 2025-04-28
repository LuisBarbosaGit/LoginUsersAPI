import { Request, Response } from "express";
import { users,} from "../repository";
import { criarHash } from "../service/user.service";

let id = 0;
export class UsersControllers{
    static getAll(req:Request, res:Response){
        res.send(users)  
    }
    
    static getId(req: Request, res: Response){
        try {
            const userid = Number(req.params.id);
            const userfind = users.find((user) => userid == user.id);
            res.send(userfind);
            
        } catch (error) {
           res.status(400).send({
            success: false,
            errors: error
           }) 
        }
    }

    static PostUser(req: Request, res: Response) {
        try {
            const user =  req.body;
            user.id = ++id;
            user.password = criarHash(user.password)
            users.push(user)
            res.send({
                success: true,
                message: "Usuário criado com sucesso"
            })      
            
        } catch (error) {
            res.status(400).send({
                success: false,
                errors: error
               })
        }
    }

    static DeleteUser(req: Request, res: Response) {
        try {
            const userid = Number(req.params.id);
            const index =  users.findIndex(user => user.id == userid);
            users.splice(index, 1);
            res.send({
                success: true,
                message: "Usuário removido com sucesso"
            })
            
        } catch (error) {
            res.status(400).send({
                success: false,
                errors: error
            }) 
        }
    }

    static ModifyUser(req: Request, res: Response){
        try {
            const user = req.body;
            const index =  users.findIndex(userindex => userindex.id == user.id);
            users.splice(index, 1, user);
            res.send({
                success: true,
                message: "Usuário alterado com sucesso"
            })
            
        } catch (error) {
            res.status(400).send({
                success: false,
                errors: error
            })
        }
    }
}