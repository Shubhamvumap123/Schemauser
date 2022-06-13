const express = require('express');
const router = express.Router();
const User = require('../model/userModel')

router.get("/",async(req,res) =>{
    try {
        const users = await User.find().lean().exec();
        res.status(200).send(users)
    } catch (error) {
        console.log("error",error)
    }  
});

router.post("/create",async(req,res) =>{

    try {
        const user = await User.create(req.body);
        return res.status(201).send(user)
    } catch (error) {
        console.log("errror",error);
    }
    
})

router.get("/:id",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id).lean().exec()
        return res.status(200).send(user)
    } catch (error) {
        console.log(error)
    }
})

router.patch("/:id/edit",async(req,res)=>{
    try {
        const user = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true,}).lean().exec();
        return res.status(201).send(user)
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id/addresses", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const addresses = user.addresses;

    return res.status(201).send(addresses);
  } catch (error) {
    console.log("error:", error);

  }
});

router.patch("/:id/address/create",async(req,res)=>{
    try {
        const user = await User.updateOne(
            {_id: req.params.id},
            {$push:{addresses:req.body}}
        );
        return res.status(200).send(user)
    } catch (error) {
        console.log(error)
    }
})

router.patch("/:id/addresses/:idx/edit", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
  
    return res.status(200).send(user);

  } catch (error) {
    console.log("error:", error);
 
  }
});

module.exports = router;