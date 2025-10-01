const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
    await mongoose.connect(pro)

    }catch(error){
        console.error('E')
    }
}