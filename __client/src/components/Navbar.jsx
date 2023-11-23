import { Link } from "react-router-dom";
import searchIcon from "../assets/search_gds.png";
import flechaIcon from "../assets/flecha.png";
import logo from "../assets/GDS_logo.png";

const Navbar = () => {
    
    return (<nav className="flex flex-row border-b-2 border-b-gray-600 py-5 justify-around items-center">
        <div className="logo">
            <img src={logo} alt="" className="w-[5em]"/>
        </div>

        <div className="search flex flex-row gap-2 bg-[#1F2D36] items-center px-3 py-2 rounded-lg w-[40%]">
            <img src={searchIcon} alt="" className="w-[20px] h-[20px]"/>
            <input type="text" name="" placeholder="Buscar" className="bg-transparent grow outline-none text-white"/>
            <img src={flechaIcon} alt="" className="w-[1em]"/>
        </div>

        <div className="bg-slate-300 rounded-[50%] w-[40px] py-5 hover:bg-slate-200 transition-[300ms] cursor-pointer">
            
        </div>
    </nav>);
}
 
export default Navbar;