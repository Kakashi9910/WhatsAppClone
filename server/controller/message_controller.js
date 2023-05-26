import Message from "../model/Message.js"
import Conversation from "../model/Conversation.js";
export const newMessage=async(request,response)=>{
    try{
        const messageDetails=new Message(request.body);
       await messageDetails.save();
       await Conversation.findByIdAndUpdate(request.body.conversationId,{message:request.body.text})
       return response.status(200).json('message saved successfully');
    }
    catch(error){
       return response.status(500).json('message not saved',error.message)
    }
}
export const getMessage=async(request,response)=>{
    try{
       const messages=await Message.find({conversationId:request.params.id})
       return response.status(200).json(messages);
    }
    catch(error){
        return response.status(500).json('error in getMessage api',error.message);
    }
}