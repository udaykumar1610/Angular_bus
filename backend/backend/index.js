import  express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import roleRoute from './routes/role.js'
import authRoute from './routes/auth.js'
import userRoute from "./routes/user.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app= express();
dotenv.config();
const port=8000
//these are middilewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    orgin: 'http://localhost:4200',
    Credentials : true
}
   
))
app.use("/api/role",roleRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);



/*//Error Handling Middileware
app.use((err, req, res, next)=>{
    const statusCode = err.status || 500;
    const errorMessage = err.message || "Something wend wrong!";
     return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: errorMessage,
    
     }); 
})
*/

 //Sucess Handling Middileware
 app.use((obj, req, res, next)=>{
    const statusCode = obj.status || 500;
    const Message = obj.message || "Something wend wrong!";
     return res.status(statusCode).json({
        success: [200,201,204].some(a=> a === obj.status)? true: false,
        status: statusCode,
        message: Message,
        data: obj.data
    
     });
    })

//db connection
const connectMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to Database!!")
    }catch (error){
         throw error;
    }
}



app.use('/api/role', roleRoute)
/*
app.get('/api/role',(req,res,next)=>{
    res.send("login is sucess..")
})
*/
app.listen(port, ()=>{
    connectMongoDB();
    console.log(`Conected to backend on port number ${port}`)
})

