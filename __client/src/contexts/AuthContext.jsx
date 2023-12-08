import { createContext, useReducer } from "react";

const AuthContext = createContext();

const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case "login":
            return {user: action.username};
        case "logout":
            return {user: null};
    }
}

function AuthProvider({children}){
    let [state, dispatch] = useReducer(reducer, {user: null})
    
    return<AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;