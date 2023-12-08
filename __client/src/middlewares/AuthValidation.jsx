import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthValidation = ({children}) => {
    let {state, dispatch} = useContext(AuthContext);
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