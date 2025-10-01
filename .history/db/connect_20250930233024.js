const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
    await mongoose.connect(p)

    }catch(error){
        console.error('E')
    }
}