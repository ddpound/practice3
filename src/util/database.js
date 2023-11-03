import mongoose from "mongoose";

const connectMongoDB = ()=>{
    try{
        mongoose.connect('mongodb+srv://tsj:1234@cluster0.b2ehjmu.mongodb.net/')
        console.log('success connection mongodb')
    }catch(error){
        console.log(error)
    }
}