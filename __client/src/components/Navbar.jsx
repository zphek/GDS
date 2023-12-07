import { Link } from "react-router-dom";
import searchIcon from "../assets/search_gds.png";
import flechaIcon from "../assets/flecha.png";
import logo from "../assets/GDS_logo.png";

const Navbar = () => {
    
    return (<nav className="flex flex-row border-b-2 border-b-gray-600 py-5 justify-between items-center">
        <div className="logo ml-8">
            <img src={logo} alt="" className="w-[5em]"/>
        </div>


        <div className="bg-slate-300 rounded-[50%] w-[40px] py-5 hover:bg-slate-200 transition-[300ms] cursor-pointer mr-8">
            
        </div>
    </nav>);
}
 
export default Navbar;