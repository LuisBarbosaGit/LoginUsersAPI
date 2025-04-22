import express = require("express");
// import { json } from "stream/consumers";
import { routes } from "./routes/index";

const app = express()


routes(app);


app.listen(3000, () => {
    console.log('Executando');
});





