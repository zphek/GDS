import Navbar from "../components/Navbar";
import searchIcon from "../assets/search_gds.png";
import flechaIcon from "../assets/flecha.png";
import fileIcon from "../assets/files.png";

const Home = () => {
    const handleFileUpload = () => {
        // This function will be called when a file is selected
        // You can add your file upload logic here
    };

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
                    <div className="archivos h-[500px] lg:h-[500px] overflow-scroll flex flex-col gap-x-2">
                        <div className="Archivo mt-3 text-white bg-slate-800 py-3 px-8 rounded-xl">
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">Nombre archivo: </h2>
                            </div>
                            <h5 className="mt-3">FECHA: 05/12/2023</h5>
                        </div>

                        <div className="Archivo mt-3 text-white bg-slate-800 py-3 px-8 rounded-xl">
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">Nombre archivo: </h2>
                            </div>
                            <h5 className="mt-3">FECHA: 05/12/2023</h5>
                        </div>

                        <div className="Archivo mt-3 text-white bg-slate-800 py-3 px-8 rounded-xl">
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">Nombre archivo: </h2>
                            </div>
                            <h5 className="mt-3">FECHA: 05/12/2023</h5>
                        </div>

                        <div className="Archivo mt-3 text-white bg-slate-800 py-3 px-8 rounded-xl">
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">Nombre archivo: </h2>
                            </div>
                            <h5 className="mt-3">FECHA: 05/12/2023</h5>
                        </div>

                        <div className="Archivo mt-3 text-white bg-slate-800 py-3 px-8 rounded-xl">
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">Nombre archivo: </h2>
                            </div>
                            <h5 className="mt-3">FECHA: 05/12/2023</h5>
                        </div>

                        <div className="Archivo mt-3 text-white bg-slate-800 py-3 px-8 rounded-xl">
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">Nombre archivo: </h2>
                            </div>
                            <h5 className="mt-3">FECHA: 05/12/2023</h5>
                        </div>

                        <div className="Archivo mt-3 text-white bg-slate-800 py-3 px-8 rounded-xl">
                            <div className="flex flex-row items-center gap-x-3">
                                <img src={fileIcon} alt="" width={30} height={30}/>
                                <h2 className="font-bold">Nombre archivo: </h2>
                            </div>
                            <h5 className="mt-3">FECHA: 05/12/2023</h5>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </>);
}
 
export default Home;