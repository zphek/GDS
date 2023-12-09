const Router = require("express").Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const username = req.body.username; // Suponiendo que el nombre del usuario se envía en el cuerpo de la solicitud POST
      const userFolder = path.join('./storage', `${username}/user_files`);
  
      cb(null, userFolder);
    },
    filename: function (req, file, cb) {
        const originalname = file.originalname;
        const username = req.body.username;
        const userFolderPath = path.join('./storage', `${username}/user_files`);
        const fullFileName = path.join(userFolderPath, originalname);

        // Verificar si el archivo ya existe
        if (fs.existsSync(fullFileName)) {
            let count = 1;
            let fileNameWithoutExtension = path.parse(originalname).name;
            let fileExtension = path.extname(originalname);

            // Buscar un nombre de archivo único
            while (fs.existsSync(path.join(userFolderPath, `${fileNameWithoutExtension}_${count}${fileExtension}`))) {
                count++;
            }

            // Establecer el nombre con el número de copia
            cb(null, `${fileNameWithoutExtension}_${count}${fileExtension}`);
        } else {
            // El archivo no existe, usar el nombre original
            cb(null, originalname);
        }
    }
  });
  
  const upload = multer({ storage: storage });

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
})

.post("/create", (req, res)=>{
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

.post("/upload", upload.single('file'), (req, res)=>{
    res.json({
        message: "El archivo fue subido con exito!",
        uploaded: true
    });
})

.post("/download", (req, res) => {
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
            // Manejar errores, por ejemplo, archivo no encontrado
            res.status(404).json({
                error: true,
                message: 'Archivo no encontrado'
            });
        } else {
            // No envíes otra respuesta aquí
            console.log("Archivo encontrado!");
        }
    });
});

module.exports = Router;