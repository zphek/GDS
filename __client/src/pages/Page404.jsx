import { useNavigate } from "react-router-dom";
import logo from "../assets/GDS_logo.png";

const Page404 = () => {
    let navigate = useNavigate();
    return (<div className="text-white flex flex-col items-center justify-center h-screen">

        <img src={logo} alt="" width={150} height={150} className="absolute top-[15rem]"/>
        <h2 className="font-extrabold text-3xl bg-black text-center py-5 w-screen text-4xl lg:text-7xl md:text-5xl">ERROR 404</h2>

        <h3 className="mt-4 text-center">The page what are 'u looking for, doesn't exist or was eliminated.</h3>

        <button className="py-3 bg-white text-black px-6 mt-9 rounded-lg font-bold transition-[600ms] hover:ring-4 hover:ring-white hover:bg-black hover:text-white hover:ring-offset-4 hover:ring-offset-[#1C252C]" onClick={e=>{
            navigate("/");
        }}>Back to Home</button>
    </div>);
}
 
export default Page404;