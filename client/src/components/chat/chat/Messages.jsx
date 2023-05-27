import { Box,Typography,styled} from "@mui/material";
import Footer from "./Footer";
import { getConversation } from "../../../service/Api";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext,useState,useEffect} from "react";
import { newMessage,getMessage} from "../../../service/Api";
import Message from "./Message";
const Wrapper=styled(Box)`
      background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
      background-size:50%;
`
const Component=styled(Box)`
   height:74vh;
   overflow-y:scroll;
`

const Messages =({person,conversation})=>{
  const {account}=useContext(AccountContext);
  const [value,setValue]=useState("");
  const[messages,setMessages]=useState([]);
  const [newMessageFlag,setMessageFlag]=useState(false);
  useEffect(()=>{
    const getMessageDetails=async()=>{
     let data= await getMessage(conversation._id);
     setMessages(data);
    }
    conversation._id && getMessageDetails();
  },[person._id,conversation._id,newMessageFlag])
  const sendText=async(e)=>{
      const code=e.which || e.keyCode;
      if(code===13){
          let message={
            senderId:account.sub,
            receiverId:person.sub,
            conversationId:conversation._id,
            type:'text',
            text:value
          }
           await newMessage(message);
           setValue("");
           setMessageFlag(!newMessageFlag);
      }
      
  }
    return(
      
          <Wrapper>
            <Component>
              {
                  messages && messages.map(message=>(
                    message.text &&
                  <Message message={message}/>
                  ))
              }
              
            </Component>
            <Footer sendText={sendText} setValue={setValue} value={value}/>
          </Wrapper>
        )
}

export default Messages;