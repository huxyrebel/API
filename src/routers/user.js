const express=require('express')
const User=require('../models/users');
const auth=require('../middleware/auth')
const router=new express.Router();

router.post('/users',async(req,res)=>{
    const user=new User(req.body)
    try {
        await user.save()
        const token=await send.generateAuthToken()
        res.status(201).send({user,token})
    } catch (e) {
      res.status(100).send(e)  
    }
})

router.post('users/login',async(req,res)=>{
    try{
        const user=await User.findByCredentials(req.body.username,req.body.password);
        const token=await user.generateAuthToken()
        res.send({user,token})
    }
    catch(e){
        res.status(400).send()
    }
})
router.post('user/logout',async(req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token!==req.token
        })
    await req.user.save()
    res.send()
}
catch(e){
res.status(500).send()
}
})



module.exports=router