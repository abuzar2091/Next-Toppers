import mongoose,{Schema} from "mongoose";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      unique:true,
      index: true,
      trim: true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password: { type: String,trim: true, required: [true, "Password is required"] },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre(
  "save",
  async function (next) {
    if (!this.isModified("password")) return next();
    this.password =await bcrypt.hash(this.password, 10);
    next();
  }
);
userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = async function () {
 return jwt.sign({
    _id: this._id,
    email: this.email,
    username: this.username,
    fullName: this.fullName,
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  }
  );
};
userSchema.methods.generateRefreshToken = async function () {
   return jwt.sign({
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_SECRET
    }
  
    );
};  
export const User = mongoose.model("User", userSchema);
