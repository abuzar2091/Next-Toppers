import mongoose,{Schema} from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      index: true,
      unique: true,
      trim: true,
    },
    courseDescription:{
        type: String,
      required: true,
    },
    lectures: [{
      type: Schema.Types.ObjectId,
      ref:"Video"
    }],
    coursePrice: {
      type: Number,
      default:100,
    },
    courseRating:{
        type:Number,
        default:1
    },
    duration:{
        type:Date,
        default:Date.now()+365*24*3600
    }
  },
  { timestamps: true }
); 
export const Course = mongoose.model("Course", courseSchema);
