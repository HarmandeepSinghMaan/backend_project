import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username:
  {
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    index:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
  },
  fullnmae:
  {
    type:String,
    required:true,
    trim:true,
    index:true,
  },
  avatar:{
    type:String, //cloudinary url
    required:true,
  },
  coverImage:
  {
    type:String,
  },
  watchHistary:
  {
    type:Schema.Type,ObjectId,
    ref:"Video",
  },
  password:
  {
    type:String,
    required:[true,'Password is required']
  },
  refreshToken:
  {
    type:String,
  }
},{timestamps:true})

export const User=mongoose.model("User",userSchema)