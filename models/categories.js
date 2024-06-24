const mongoose=require("mongoose")


//model for the category
const categorySchema=new mongoose.Schema({
    category:{
        type:String,
        required:true,

    }
})

const Category=moongose.model('Category',categorySchema)

module.exports=Category