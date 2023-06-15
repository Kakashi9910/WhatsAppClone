import { Box,Typography,styled} from "@mui/material";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext,useState,useEffect,useRef} from "react";
import { newMessage,getMessage} from "../../../service/Api";
import Message from "./Message";
const Wrapper=styled(Box)`
      background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
      background-size:50%;
`
const Component=styled(Box)`
   height:80vh;
   overflow-y:scroll;
`
const Container=styled(Box)`
padding:1px 80px
`
const Messages =({person,conversation})=>{
  const {account,socket}=useContext(AccountContext);
  const [value,setValue]=useState("");
  const[messages,setMessages]=useState([]);
  const [newMessageFlag,setMessageFlag]=useState(false);
  const [incomingMessage,setIncomingMessage]=useState(null);
  const scrollRef=useRef();
  useEffect(()=>{
    socket.current.on('getMessage',data=>{
      setIncomingMessage({
        ...data,
        createdAt:Date.now()
      })
    })
  })
  useEffect(()=>{
    const getMessageDetails=async()=>{
     let data= await getMessage(conversation._id);
     setMessages(data);
    }
    conversation._id && getMessageDetails();
  },[person._id,conversation._id,newMessageFlag])
  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:"smooth"});
  },[messages])
   useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
     setMessages(prev=>[...prev,incomingMessage])

   },[incomingMessage,conversation])
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
          socket.current.emit('sendMessage',message)
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
                    <Container ref={scrollRef}>
                  <Message message={message}/>
                  </Container>
                  ))
              }
              
            </Component>
            <Footer sendText={sendText} setValue={setValue} value={value}/>
          </Wrapper>
        )
}

export default Messages;