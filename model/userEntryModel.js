const mongoose = require("mongoose")
const entrySchema = new mongoose.Schema(
    {
        name:String,
        phone:String,
        age:String,
        email:String,
        password:String
    }
)

module.exports = mongoose.model("userentry",entrySchema)