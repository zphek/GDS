import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidemenu";

const Home = () => {
    return (<>
        <Navbar/>
        <div className="h-[90%] flex">
            <Sidemenu/>
            <div className="w-[100%] flex-col">
                <div className="flex p-5 border-b-2 border-b-gray-600 text-white text-base font-extrabold">
                    <h2 className="block">MI DISCO / JUEGOS</h2>
                </div>

                <div>

                </div>
            </div>
        </div>
    </>);
}
 
export default Home;