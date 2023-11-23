import trash from "../assets/trash.png";
import historial from "../assets/historial.png";
import disco from "../assets/storage.png";
import dispositivos from "../assets/devices.png";

const Sidemenu = () => {
    return (<nav className="flex flex-col border-r-2 border-r-gray-600 w-[20%] h-[100%] items-center">
        <ul className="flex flex-col text-white gap-y-4 mt-[10em] font-bold text-base text-xl">
            <li>
                <a href="" className="flex items-center gap-3">
                    <img src={disco} className="w-[3em]"/>
                Mi disco</a></li>

            <li>
                <a href="" className="flex items-center gap-3">
                    <img src={dispositivos} className="w-[3em]"/>
                Dispositivos</a></li>

            <li>
                <a href="" className="flex items-center gap-3">
                    <img src={historial} className="w-[3em]"/>
                Historial</a></li>
            <li>
                <a href="" className="flex items-center gap-3"> 
                    <img src={trash} className="w-[3em]"/>
                Papelera</a></li>
        </ul>
    </nav>);
}
 
export default Sidemenu;