import { createContext, useState } from "react";

export const Authcontext = createContext();

function AuthContextProvider({children}) {
    const [isAuth,setIsAuth] = useState(false);
    const [token , setToken] = useState('');
    const [addressFlag , setAddressFlag] = useState(false);
    const login =(token)=>{
        setIsAuth(true);
        setToken(token);
    }
    const logout =()=>{
        setIsAuth(false);
        setToken('');
    }
    
    return (
        <Authcontext.Provider value={{isAuth , token , login , logout,addressFlag,setAddressFlag}}>{children}</Authcontext.Provider>
    )
}

export default AuthContextProvider;
