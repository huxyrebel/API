const mongoose=require("mongoose")
const Category=require('./categories')

//model for the quotes
const quotesSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true

    },
    author:{
        type:String,
        required:true
    },
    //showing category by refrencing the objectid of category in the quotes table
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Category,
        required:true
    }
})

const Quotes=new mongoose.Model('Quotes',quotesSchema)

module.exports=Quotes