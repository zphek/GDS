const fs = require("fs");

class controllers{

    login(req, res){
        let exists = fs.existsSync(`./storage/${req.body.username}`);

        if(exists){
            fs.readFile(`./storage/${req.body.username}/password.txt`, 'utf8', (err, datos)=>{
                if(!err && datos == req.body.password){
                    res.json({
                        mensaje: "Usuario logueado correctamente!",
                        username: req.body.username,
                        logueado: true
                    });
                } else {
                    res.json({
                        mensaje: "Usuario o contraseña incorrectos.",
                        logueado: false
                    });
                }
            });
            return;
        }

        res.json({
            mensaje: "Usuario no existe.",
            logueado: false
        });
    }

    createUser(req, res){
        if(!(req.body.username && req.body.password)){
            res.json({
                message: "Faltan campos que llenar.",
                error: true
            });
            return;
        }
    
        if(!fs.existsSync("./storage")){
            fs.mkdirSync("./storage");
        }
    
        let response = fs.existsSync(`./storage/${req.body.username}`);
    
        if(!response){
            fs.mkdirSync(`./storage/${req.body.username}`);
            fs.mkdirSync(`./storage/${req.body.username}/user_files`)
            fs.writeFileSync(`./storage/${req.body.username}/password.txt`, req.body.password, (err)=>{
                console.log(err)
            });
    
            res.json({
                message: "El usuario ha sido creado correctamente!",
                error: false
            });
            return;
        }
    
        res.send({
            message: "Escoja otro nombre de usuario.",
            error: true
        });
    }

    getFiles(req, res){
        let {username} = req.body;

        if (username) {
        let files = fs.readdirSync(`./storage/${username}/user_files`, { withFileTypes: true });
    
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
    }

    uploadFiles(req, res){
        res.json({
            message: "El archivo fue subido con exito!",
            uploaded: true
        });
    }

    downloadFiles(req, res){
        const { username, filename } = req.body;
        const rutaArchivo = `./storage/${username}/user_files/${filename}`;

        if (!username) {
            res.status(400).json({
                error: true,
                message: "Usuario no existe"
            });
            return;
        }

        res.download(rutaArchivo, (err) => {
            if (err) {

                res.status(404).json({
                    error: true,
                    message: 'Archivo no encontrado'
                });
            } else {

                console.log("Archivo encontrado!");
            }
        });
    }
}

module.exports = new controllers;