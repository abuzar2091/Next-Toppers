import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app =express();
// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     credentials:true
// }))
app.use(cors({
origin: "https://next-toppers.netlify.app",
methods: 'GET,POST,PUT,DELETE',
credentials: true,
}))

  
app.use(express.json({ limit: "16kb" })); 
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // for url  encoded data
app.use(express.static("public"));  // to serve static files css js
app.use(cookieParser());

// routes
import userRouter from "./routes/user.route.js"
import facultyRouter from "./routes/faculty.route.js"
import adminRouter from "./routes/admin.route.js"
app.get("/",(req,res)=>{
    res.send("hello world welcome")
})
app.use("/api/v1/users",userRouter)
app.use("/api/v1/faculty",facultyRouter)
app.use("/api/v1/admin",adminRouter)

export {app}