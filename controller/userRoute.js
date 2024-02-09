const express = require("express")
const router = express.Router()
const userEntryModel = require("../model/userEntryModel")
const bcrypt = require("bcryptjs")
const { request } = require("http")

hashPasswordGenerator = async(pswd)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pswd,salt)
}



router.post("/signup", async(req,res)=>{
    let {data} = {"data":req.body}
    let password = data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let userEntryObj = new userEntryModel(data)
     let result = userEntryObj.save()
         res.json({status:"successful save w pw encryption"})


        }
    )
    // let result = await userEntryObj.save()
   // res.json({status:"success save"})
})

router.post("/signin", async(req,res)=>{
    let inputemail = req.body.email 
    let data = await userEntryModel.findOne({"email": inputemail})
    if(!data)
    {
      return res.json({status:"invalid email id"})
    }
    let dbPassword = data.password
    let inputpassword = req.body.password
    const match = await bcrypt.compare(inputpassword,dbPassword)
    if(!match)
    {
        res.json({status:"incorrect password"})
    }
    res.json({status:"success"})

})

module.exports = router