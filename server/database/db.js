import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const Connection=async()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-6vqkckg-shard-00-00.zlf9mjr.mongodb.net:27017,ac-6vqkckg-shard-00-01.zlf9mjr.mongodb.net:27017,ac-6vqkckg-shard-00-02.zlf9mjr.mongodb.net:27017/?ssl=true&replicaSet=atlas-q18y9q-shard-0&authSource=admin&retryWrites=true&w=majority`

    try{
          await mongoose.connect(URL,{useUnifiedTopology:true});
          console.log("database connected successfully");
    }
    catch(error){
        console.log("Error in connecting to database",error.message);
    }
}

export default Connection;