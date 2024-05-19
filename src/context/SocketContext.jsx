import { createContext, useContext, useEffect, useState } from "react";
import {io} from "socket.io-client"
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider =({children}) =>{
    const {currentuser} = useContext(AuthContext);
    const [socket , setSocket] = useState(null);

    useEffect( () =>{
        setSocket(io("http://localhost:4000"));
    } , []);

    useEffect(()=>{
        currentuser && socket?.emit("newUser" , currentuser.id);
    }  , [currentuser , socket])
    
    return (
        <SocketContext.Provider value={{socket}}>
           {children}
        </SocketContext.Provider>
    )
}