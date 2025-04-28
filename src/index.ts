import express = require("express");
// import { json } from "stream/consumers";
import { routes } from "./routes/index";

const cors = require('cors');
const app = express()

app.use(cors())
routes(app);


app.listen(3000, () => {
    console.log('Executando');
});





