import axios from 'axios';

const url='http://localhost:8000';
export const addUser=async(data)=>{
    try{
       await axios.post(`${url}/add`,data);
    }
    catch(error){
       console.log("Error while calling addUser api",error.messege);
    }
}

export const getUsers=async()=>{
    try{
        let users= await axios.get(`${url}/users`);
        return users.data;
    }
    catch(error){
         console.log('Error in getting users',error.message);
    }
}

export const setConversation= async (data)=>{
    try{
         await axios.post(`${url}/conversation/add`,data);
    }
    catch(error){
        console.log('Error in setConversation api',error.message);

    }

}

export const getConversation=async(data)=>{
    try{
            let response=await axios.post(`${url}/conversation/get`,data);
        
            return response.data;
    }
    catch(error){
        console.log('Error in getConversation api',error.message);

    }
}
export const newMessage=async(data)=>{
    try{
        let response=await axios.post(`${url}/message/add`,data);
        return response.data;
    }
    catch(error){
        console.log('Error in newMessage api',error.message);

    }
}
export const getMessage=async(id)=>{
    try{
        let response= await axios.get(`${url}/message/get/${id}`) 
        return response.data;
    }
    catch(error){

    }
}