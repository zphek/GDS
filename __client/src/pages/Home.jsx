import Navbar from "../components/Navbar";
import searchIcon from "../assets/search_gds.png";
import flechaIcon from "../assets/flecha.png";
import fileIcon from "../assets/files.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const handleFileUpload = () => {
        // This function will be called when a file is selected
        // You can add your file upload logic here
    };

    let [files, setFiles] = useState([]);

    useEffect(()=>{
        axios.post("http://localhost:3000/api/getfiles", {
            username: "bernardo"
        }).then(({data})=>{
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
                    {files.map((file, index)=>{
                        
                        return <div className="Archivo mt-3 text-white bg-slate-800 py-3 mt-2 px-8 rounded-xl hover:bg-slate-700 transition-[500ms] cursor-pointer" key={index}>
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">{file.name}</h2>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="mt-3">{file.creationDate}</h5>
                                <h5 className="mt-3 px-5 py-2 bg-slate-700 rounded-lg">.{file.extension}</h5>
                            </div>
                        </div>
                    })}
                </section>
            </main>
        </div>
    </>);
}
 
export default Home;