const express = require("express")
const router = express.Router()
const userEntryModel = require("../model/userEntryModel")
const bcrypt = require("bcryptjs")

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

module.exports = router