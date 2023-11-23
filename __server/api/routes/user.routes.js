const Router = require("express").Router();
const fs = require("fs");

Router
.get("/", (req, res)=>{
    res.send(fs.readdirSync("./storage"));
    fs.mkdirSync();
    res.send("HOlaaaaa");
})

.post("/login", (req, res)=>{
    let exists = fs.existsSync(`./storage/${req.body.username}`);

    if(exists){
        fs.readFile(`./storage/${req.body.username}/password.txt`, 'utf8', (err, datos)=>{
            if(!err && datos == req.body.password){
                res.send(datos);
            } else {
                res.json({
                    mensaje: "Usuario o contraseña incorrectos.",
                    logueado: false
                });
            }
        });
    }
})

.post("/create", (req, res)=>{
    let response = fs.existsSync(`./storage/${req.body.username}`);

    if(!response){
        fs.mkdirSync(`./storage/${req.body.username}`);
        fs.writeFileSync(`./storage/${req.body.username}/password.txt`, req.body.password, (err)=>{
            console.log(err)
        });
    }

    res.send(req.body);
});


module.exports = Router;