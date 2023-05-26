import express  from "express";
import { addUser } from "../controller/user-controller.js";
import { getUsers } from "../controller/user-controller.js";
import { newConversation } from "../controller/Conversation_Controller.js";
import { getConversation } from "../controller/Conversation_Controller.js";
import { newMessage,getMessage} from "../controller/message_controller.js";
const route=express.Router();



route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage)
export default route;