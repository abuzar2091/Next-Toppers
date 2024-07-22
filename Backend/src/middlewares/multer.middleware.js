import multer from "multer";
// const upload = multer({ dest: './public/temp' });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   //path to save the files in your local system directory
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    console.log("file name ",file.originalname);
    cb(null, file.originalname);
  },
});
export const upload=multer({storage});
