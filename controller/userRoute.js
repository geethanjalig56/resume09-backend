const express = require("express")
const router = express.Router()
const userEntryModel = require("../model/userEntryModel")

router.post("/signup", async(req,res)=>{
    let data = req.body
    let userEntryObj = new userEntryModel(data)
    let result = await userEntryObj.save()
    res.json({status:"success save"})
})

module.exports = router