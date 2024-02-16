import { useContext, useEffect, useState } from 'react';
import GDS from '../assets/GDS_logo.png';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function handleChange(e, setForm) {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

function handleSubmit(e, data, setError, dispatch, navigate){
    e.preventDefault();

    console.log(data);

    axios.post("http://localhost:3000/api/login", {
        username: data.username,
        password: data.password
    }).then(({data:response})=>{
        if(!response.logueado){
            setError({
                error: true,
                message: response.mensaje
            });
            return;
        }

        console.log(response);

        dispatch({type: "login", username: response.username});
        document.cookie = `session=${response.username}; 2500; path=/`;
        navigate("/");
    }).catch(err=>{
        console.dir(err)
    })

    setTimeout(()=>{
        setError({
            error: false,
            message: ""
        });
    }, 2000);
}


const Login = () => {
    let {state, dispatch} = useContext(AuthContext);
    let navigate = useNavigate();
    let [Error, setError] = useState({
        error: false,
        message: ""
    });
    let [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    useEffect(()=>{
        console.log(state);
    }, [state]);

    return (<div className="h-screen flex flex-col justify-center items-center">
        <img src={GDS} alt="" className='min-w-[50px] max-w-[250px] object-contain'/>
        
        <form className="mt-2 flex flex-col gap-y-3 lg:w-[25%] md:w-[40%] sm:w-[60%] w-[100%] text-white p-4 mt-10" onSubmit={e=> handleSubmit(e, formData, setError, dispatch, navigate)}>
            <div className='flex flex-col gap-y-5'>
                <div className='flex flex-col'>
                    <h3 className='font-base text-lg'>User or email</h3>
                    <input type="text" name="username" id="" className='py-3 bg-transparent outline-none border-b-2 border-[#FFC452] text-md font-bold' onChange={e=> handleChange(e, setFormData)}/>
                </div>
                
                <div className='flex flex-col'>
                    <h3 className='font-base text-lg'>
                        Password
                    </h3>

                    <input type="password" className='py-3 bg-transparent outline-none border-b-2 border-[#FFC452] text-md font-bold'name="password" onChange={e=> handleChange(e, setFormData)}/>
                    
                    <ul className='mt-4'>
                        <li><Link href="" className='text-[#FFC452] hover:text-white transition-[300ms]'>I forgot my password?</Link></li>
                    </ul>
                </div>
            </div>
            
            {Error.error &&
                <h3 className='text-red-500 text-lg font-bold'>
                    {Error.message}
                </h3>
            }

            <button className='bg-[#FFC452] hover:ring-2 hover:ring-offset-4 ring-offset-[#1C252C] ring-[#FFC452] transition-[800ms] px-3 py-1.5 rounded-md font-bold mt-5 text-black text-xl'>
                LOGIN
            </button>
        </form>
    </div>);
}
 
export default Login;