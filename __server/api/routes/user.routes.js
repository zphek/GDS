const Router = require("express").Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const {login, createUser, downloadFiles, getFiles, uploadFiles} = require("../controllers/user.controllers");

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

.post("/login", login)

.post("/create", createUser)

.post("/getfiles", getFiles)

.post("/upload", upload.single('file'), uploadFiles)

.post("/download", downloadFiles);

module.exports = Router;