import express from "express";
// import { json } from "stream/consumers";

const app = express()

app.use(express.json())
let id = 0;
let users : {id: number, name : String, email : String, password: String} [] = []

app.listen(3000, () => {
    console.log('Executando');

});

app.get("/users", (req, res) => {
    res.send(users)
});

app.get("/users/:id", (req, res) => {
    const userid = Number(req.params.id);
    const userfind = users.find((user) => userid == user.id);
    res.send(userfind);
});

app.post("/user", (req, res) => {
    const user =  req.body;
    user.id = ++id;
    users.push(user)
    res.send({
        message : "Usuario  adicionado com sucesso"
    })
});

app.delete("/users/:id", (req, res) => {
    const userid = Number(req.params.id);
    const index =  users.findIndex(user => user.id == userid);
    users.splice(index, 1);
    res.send({
        message : "Usuario  removido com sucesso"
    })
});

app.put("/users/:id", (req, res) =>{
    const user = req.body;
    const index =  users.findIndex(userindex => userindex.id == user.id);
    users.splice(index, 1, user);
    res.send({
        message : "Usuario alterado com sucesso"
    })
});




