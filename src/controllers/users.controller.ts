import { Request, Response } from "express";

let id = 0;
type User = {id: number, name : String, email : String, password: String} 
let users: User[] = []

export class UsersControllers{
    static getAll(req:Request, res:Response){
        res.send(users)  
    }
    
    static getId(req: Request, res: Response){
        const userid = Number(req.params.id);
        const userfind = users.find((user) => userid == user.id);
        res.send(userfind);
    }

    static PostUser(req: Request, res: Response) {
        const user =  req.body;
        user.id = ++id;
        users.push(user)
        res.send({
            message : "Usuario  adicionado com sucesso"
        })
    }

    static DeleteUser(req: Request, res: Response) {
        const userid = Number(req.params.id);
        const index =  users.findIndex(user => user.id == userid);
        users.splice(index, 1);
        res.send({
            message : "Usuario  removido com sucesso"
        })
    }

    static ModifyUser(req: Request, res: Response){
        const user = req.body;
        const index =  users.findIndex(userindex => userindex.id == user.id);
        users.splice(index, 1, user);
        res.send({
            message : "Usuario alterado com sucesso"
        })
    }
}