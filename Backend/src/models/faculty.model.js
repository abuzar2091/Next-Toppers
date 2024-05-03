import mongoose,{Schema} from "mongoose";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const facultySchema = new mongoose.Schema(
  {
    faculyMentor:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    avatar: {
      type: String,
      required: true,
    },
    experiance:{
        type:String,
        default:"fresher"
    },
    education:{
        type:[string],
        required:true,
    },
    courses:[
        {
            type:Schema.Types.ObjectId,
            ref:"Course"
        }

    ],   
  },
  { timestamps: true }
);

facultySchema.pre(
  "save",
  async function (next) {
    if (!this.isModified("password")) return next();
    this.password =await bcrypt.hash(this.password, 10);
    next();
  }
);
 
export const Faculty = mongoose.model("Faculty", facultySchema);
