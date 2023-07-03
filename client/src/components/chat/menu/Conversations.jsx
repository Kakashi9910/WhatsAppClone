import { useEffect,useState } from "react"
import { getUsers } from "../../../service/Api"
import { Box,styled,Divider} from "@mui/material";
import Conversation from "./Conversation";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Component=styled(Box)`
    height:81vh;
    overflow:overlay;
`
const StyleDivider=styled(Divider)`
      margin:0 0 0 70px;
      background-color:#e9edef;
      opacity:0.6;
`
const Conversations=({text})=>{
    const [users,setUsers]=useState([]);
    const {account,socket,setActiveUsers}=useContext(AccountContext);
    useEffect(()=>{
        const fetchUsers=async()=>{
              let data=await getUsers();
              let filteredData=data.filter(user=> user.name.toLowerCase().includes(text.toLowerCase()))
               setUsers(filteredData);
        }
        fetchUsers();
    },[text])
    useEffect(()=>{
       socket.current.emit('addUsers',account);
       socket.current.on("getUsers",users=>{
        setActiveUsers(users);
       },[account])
    })
    // console.log(users);
    return(
            <Component>
                {
                    users.map(user=>(
                        user.sub!==account.sub &&
                        <>
                      <Conversation user={user}/>
                      <StyleDivider light />
                      </>
                    ))
                }
            </Component>
        )

}

export default Conversations;