const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();

app.use
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

