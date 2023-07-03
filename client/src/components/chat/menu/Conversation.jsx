import { Box,Typography,styled} from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../service/Api";
import { UserContext } from "../../../context/UserProvider";

const Component=styled(Box)`
   display:flex;
   height:40px;
   padding:13px 0;
   cursor:pointer;
   align-items:center;
`
const Image=styled('img')({
    height:50,
    width:50,
    borderRadius:'50%',
    padding:'0 14px',
    objectFit:'cover'
})
const Conversation=({user})=>{
    const {account}=useContext(AccountContext);
    const {setPerson}=useContext(UserContext);
    const getUser=async()=>{
         setPerson(user);
         await setConversation({senderId:account.sub,receiverId:user.sub});
    }
    return(
      <Component onClick={()=>getUser()}>
        <Box>
            <Image src={user.picture} alt="pic" />
        </Box>
        <Box>
            <Typography>{user.name}</Typography>
        </Box>
      </Component>
    )
}

export default Conversation;