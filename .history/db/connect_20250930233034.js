const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
    await mongoose.connect(process.env.M)

    }catch(error){
        console.error('E')
    }
}