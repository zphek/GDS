import { useState } from 'react';
import GDS from '../assets/GDS_logo.png';
import { Link } from 'react-router-dom';

function handleChange(e, setForm){

}

function handleSubmit(e, data, setError){
    e.preventDefault();

    setError(true);

    setTimeout(()=>{
        setError(false);
    }, 2000);
}


const Login = () => {
    let [error, setError] = useState(false);
    let [formData, setFormData] = useState({
        user: "",
        password: ""
    });

    return (<div className="h-screen flex flex-col justify-center items-center">
        <img src={GDS} alt="" className='min-w-[50px] max-w-[250px] object-contain'/>
        
        <form className="mt-2 flex flex-col gap-y-3 lg:w-[25%] md:w-[40%] sm:w-[60%] w-[100%] text-white p-4 mt-10" onSubmit={e=> handleSubmit(e, formData, setError)}>
            <div className='flex flex-col gap-y-5'>
                <div className='flex flex-col'>
                    <h3 className='font-base text-lg'>Usuario o email</h3>
                    <input type="text" name="user" id="" className='py-3 bg-transparent outline-none border-b-2 border-[#FFC452] text-md font-bold' />
                </div>
                
                <div className='flex flex-col'>
                    <h3 className='font-base text-lg'>
                        Contraseña
                    </h3>

                    <input type="text" className='py-3 bg-transparent outline-none border-b-2 border-[#FFC452] text-md font-bold'name="password" onChange={e=> handleChange(e, setFormData)}/>
                    
                    <ul className='mt-4'>
                        <li><Link href="" className='text-[#FFC452] hover:text-white transition-[300ms]'>I forgot my password?</Link></li>
                    </ul>
                </div>
            </div>
            
            {error &&
                <h3 className='text-red-500 text-lg font-bold'>
                    Usuario o contraseña incorrectos.
                </h3>
            }

            <button className='bg-[#FFC452] hover:ring-2 hover:ring-offset-4 ring-offset-[#1C252C] ring-[#FFC452] transition-[800ms] px-3 py-1.5 rounded-md font-bold mt-5 text-black text-xl'>
                LOGIN
            </button>
        </form>
    </div>);
}
 
export default Login;