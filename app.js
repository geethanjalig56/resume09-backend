const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./controller/userRoute")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://geethanjali2001:ammu2001@cluster0.iwq8qez.mongodb.net/resumeDb?retryWrites=true&w=majority",{useNewUrlParser:true})
app.use("/api/resume",userRoute)
app.listen(3004, ()=>{
    console.log("YOYO server singh")
})