import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthValidation = ({children}) => {
    let {state, dispatch} = useContext(AuthContext);
    useEffect(()=>{
        console.dir(document.cookie.split("=")[1] + "...");
        console.log(document.cookie.includes("session"));

        if(document.cookie.includes("session")){
            dispatch({type:"login", username:document.cookie.split("=")[1]});
            console.log("User logged in:", state.user);
        }
    }, []);
    return (
        <>
            {
        state.user ? <>
                {children}
            </> : <>
                {<Navigate to={"/login"}/>}
            </>
        }
        </>
    );
}
 
export default AuthValidation;