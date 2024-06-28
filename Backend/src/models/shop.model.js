import mongoose,{Schema} from "mongoose";
const ShopSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    bookWriter: {
        type: String,
        required: true,
        index: true,
        trim: true,
      },
    bookDescription:{
        type: String,
        required: true,
    },
    bookCategory:{
      type: String,
      required:true,

    },
    bookPrice: {
      type: Number,
      default:100,
    },
    bookRating:{
        type:Number,
        default:1
    },
  },
  { timestamps: true }
); 
export const Shop = mongoose.model("Shop", ShopSchema);
