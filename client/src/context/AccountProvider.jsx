import { createContext, useEffect, useRef, useState } from "react";
import {io} from 'socket.io-client'

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const socket=useRef();
    const [activeUsers,setActiveUsers]=useState([]);
    useEffect(()=>{
        socket.current=io('ws://localhost:9000')
    },[])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            socket,
            activeUsers,
            setActiveUsers
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;