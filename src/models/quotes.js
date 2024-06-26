const mongoose=require("mongoose")
const Category=require('./categories')
const User = require("./users")
const { type } = require("os")

//model for the quotes
const quotesSchema=new mongoose.Schema({
    quote:{
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
    },
    //refrencing that which user accessed these quotes
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    }
})

const Quotes=new mongoose.Model('Quotes',quotesSchema)

module.exports=Quotes