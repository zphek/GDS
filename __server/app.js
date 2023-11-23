const express = require("express");
const app = express();
const user = require("./api/routes/user.routes");

app.use(express.json());
app.use("", user);

app.listen(3000, ()=>{
    console.log("Puerto encendido en el puerto 3000!");
});