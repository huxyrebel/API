const express=require('express')
const Quotes=require('../models/quotes');
const auth=require('../middleware/auth').auth
const isAdmin=require('../middleware/auth').isAdmin
const router=new express.Router();


//endpoint for getting all the quotes
router.get('/quotes',auth,async(req,res)=>{
    try{
        const quotes=await Quotes.find();
        res.send(quotes)
    }
    catch(e){
        res.status(500).send(e)
    }
})


router.get('/quotes?category={category}',auth,async(req,res)=>{
try {
    let quotes
    if(category){
        quotes=await Quotes.find({category}).populate('category')
    }
    else{
        quotes=await Quotes.find().populate('category')
    }
    res.send(quotes)
} catch (e) {
    res.status(500).send(e)
}
})

