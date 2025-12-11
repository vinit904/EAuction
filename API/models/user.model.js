import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


const userSchema = mongoose.Schema({
  _id: Number,
  name :
  {
   type : String,
   required : [true , "Name is required"],
   lowercase : true,
   trim : true 
  },
  email : {
    type : String,
    reruired : [true , "Email is required"],
    lowercase : true,
    trim : true
  },
  password : {
    type : String,
    required : [true, "Password is required"],
    maxlength : 10,
    minlength : 5,
    trim : true
  },
  mobile : {
    type : String,
    required : [true, "Mobile is required"],
    trim : true
  },
  address : {
    type: String,
    required : [true, "Address is required"],
    trim : true
    
  },
  city : {
    type: String,
    required : [true, "City is required"],
    trim : true
  },
  gender : {
    type: String,
    required : [true, "City is required"],
    trim : true
  },
  
  role : String,
  status: Number,
  info : String
})

// Apply the uniqueValidator plugin to UserSchema.
userSchema.plugin(uniqueValidator)

// compile schema to model
const UserSchemaModel = mongoose.model('Auction_userdata',userSchema)

export default UserSchemaModel
