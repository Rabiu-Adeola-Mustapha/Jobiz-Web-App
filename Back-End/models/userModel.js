const {model, Schema} = require("mongoose");


const userSchema = new Schema ({
     
    firstName: {
        type: String,
        required: true,
        char :255
    },
    lastName: {
        type: String,
        required: true,
        char :255
    },
    email: {
        type: String,
        required: true,
        
    },
    phone: {
        type: String,
        required: true,
        
    },
    cv:{
        type:String,
        default:"",
    }
})








module.exports = model("User", userSchema);