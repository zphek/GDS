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
})

.post("/getfiles", (req, res)=>{
    let {username} = req.body;

    if (username) {
    let files = fs.readdirSync(`./storage/${username}/user_files`, { withFileTypes: true });
    // Map the array to include file information (name, extension, and creation date)
    files = files.map(file => {
      const fullPath = `./storage/${username}/user_files/${file.name}`;
      const stats = fs.statSync(fullPath);
      const isFile = file.isFile();
      const nameWithoutExtension = isFile ? file.name.replace(/\.[^/.]+$/, "") : file.name;
      return {
        name: nameWithoutExtension,
        type: isFile ? 'file' : 'directory',
        extension: isFile ? file.name.split('.').pop() : null,
        creationDate: stats.birthtime.toLocaleDateString()
      };
    });
    res.json(files);
    return;
  }


    res.json({
        mensaje: "No usuario.",
        logueado: false
    });
})


module.exports = Router;