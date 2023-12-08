const FileDialog = () => {
    return (<div className="h-screen w-screen absolute flex flex-row items-center justif">

        <div className="h-[60%] w-[500px] flex flex-row">
            <h3 className="font-bold text-base">NOMBRE ARCHIVO</h3>
            
            <h2>
                ¿Qué desea hacer con el archivo?
            </h2>

            <button className="text-white bg-blue-600 py-2 px-4">
                Descargar
            </button>
            
            <button className="text-white bg-red-500 py-2 px-4">
                Eliminar
            </button>

        </div>
    </div>);
}
 
export default FileDialog;