import Navbar from "../components/Navbar";
import searchIcon from "../assets/search_gds.png";
import flechaIcon from "../assets/flecha.png";
import fileIcon from "../assets/files.png";
import { useEffect, useState } from "react";
import axios from "axios";

const handleFileDownload = (e, filename)=>{

}

const Home = () => {

    let [files, setFiles] = useState([]);
    let [error, setError] = useState({
        error: false,
        message: ""
    });

    const handleFileUpload = (e) => {
        console.dir(e.target.files);
    
        const file = e.target.files[0];
    
        if (file) {
            var formData = new FormData();
            formData.append('username', 'siloe');
            formData.append('file', file);
    
            axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function (response) {
                // Manejar la respuesta del servidor
                setError(prev=>{ prev.error = response.data.uploaded
                                 prev.message = response.data.mensaje})
                console.log(response.data);
            })                
            .catch(function (error) {
                // Manejar errores
                console.error('Error al subir el archivo', error);
            });
            
            } else {
                console.error('Selecciona un archivo antes de subirlo.');
            }
    };

    useEffect(()=>{
        axios.post("http://localhost:3000/api/getfiles", {
            username: "siloe"
        }).then(({data})=>{
            console.log(data)
            setFiles(data);
        }).catch(err=>{
            console.log(err);
        })
    }, []);

    return (<>
        <Navbar/>
        <div className="h-[90%] flex justify-center">
            <main className="flex flex-col lg:w-[40%] sm:w-[60%] w-[100%] mr-3 ml-3">
                <label htmlFor="fileInput" className="bg-blue-500 hover:ring-2 hover:ring-offset-4 ring-offset-[#1C252C] ring-blue-500 transition-[800ms] px-3 py-1.5 rounded-md font-bold mt-5 text-white cursor-pointer text-center">
                        SUBIR ARCHIVO
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={handleFileUpload}
                    />

                <div className="search flex flex-row gap-2 bg-[#1F2D36] items-center px-3 py-3 rounded-lg mt-5 block">
                    <img src={searchIcon} alt="" className="w-[20px] h-[20px]"/>
                    <input type="text" name="" placeholder="Buscar" className="bg-transparent grow outline-none text-white"/>
                    <img src={flechaIcon} alt="" className="w-[1em]"/>
                </div>

                <section className="mt-4 rounded-lg">
                    <h2 className="text-white px-10 py-3 border-b-2 border-slate-500 font-bold font-black">
                        Archivos
                    </h2>

                    <div className="archivos h-[500px] lg:h-[550px] overflow-scroll flex flex-col gap-x-2">
                    {files.length > 0 ? files.map((file, index)=>{
                        
                        return <div className="Archivo mt-3 text-white bg-slate-800 py-3 mt-2 px-8 rounded-xl hover:bg-slate-700 transition-[500ms] cursor-pointer" key={index} onClick={e=>handleFileDownload(e, file.name + `.${file.extension}`)}>
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">{file.name}</h2>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="mt-3">{file.creationDate}</h5>
                                <h5 className="mt-3 px-5 py-2 bg-slate-700 rounded-lg">.{file.extension}</h5>
                            </div>
                        </div>
                    }) : <h2 className="text-white px-8 text-center py-5">No hay archivos que mostrar.</h2>}
                    </div>
                </section>
            </main>
        </div>
    </>);
}
 
export default Home;