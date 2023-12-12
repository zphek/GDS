import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthValidation = ({ children }) => {
    const { state, dispatch } = useContext(AuthContext);

    useEffect(() => {
        console.dir(document.cookie.split("=")[1] + "...");
        console.log(document.cookie.includes("session"));

        if (document.cookie.includes("session")) {
            const username = document.cookie.split("=")[1];
            dispatch({ type: "login", username });
        }
    }, [dispatch]);

    return (
        <>
            {state.user ? (
                <>
                    {children}
                </>
            ) : (
                <>
                    {<Navigate to={"/login"} />}
                </>
            )}
        </>
    );
};

export default AuthValidation;
