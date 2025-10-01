const mongoose=require('mongoose');

const connectDB=async()=>{
try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected Successfully");
}catch(error){
        console.error('Error Connecting To MongoDB',error)
    }
}