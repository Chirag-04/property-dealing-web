import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider =({children}) =>{
    const [currentuser , setCurrentuser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const updateUser = (data) =>{
        setCurrentuser(data);
    }
    useEffect( () =>{
        localStorage.setItem("user" , JSON.stringify(currentuser));
    } , [currentuser]);
    
    return (
        <AuthContext.Provider value={{currentuser ,updateUser}}>
           {children}
        </AuthContext.Provider>
    )
}