const express = require("express")
const bcrypt = require("bcryptjs")
const router = express.Router()
const User = require("../models/User")

router.post("/register", async (req, res)=>{
    const {report}=req.body

    try {
        let user = await User.findOne({email})
    
        user = new User ({
            name,
            email,
            password
        })
        await user.save()
        res.status(201).json({msg:"user register sucessfully"})
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server error")
        
    }
})