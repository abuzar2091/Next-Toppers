import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const facultySchema = new mongoose.Schema(
  {
    facultyMentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
     },
    avatar: {
      type: String,
     // required: true,
    },
    experience:{
        type:String,
        default:"fresher"
    },
    education:{
        type:[String],
        required:true,  
    },
    about:{
      type:String,
      required:true
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ],   
  },
  { timestamps: true }
);

// facultySchema.pre(
//   "save",
//   async function (next) {
//     if (!this.isModified("password")) return next();
//     this.password =await bcrypt.hash(this.password, 10);
//     next();
//   }
// );
 
export const Faculty = mongoose.model("Faculty", facultySchema);
