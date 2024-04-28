const express=require("express");
require("dotenv").config();

const app=express();

const uploadRoute=require("./routes/cvUpload");
const fileupload=require("express-fileupload");
const cors=require("cors");


const PORT=process.env.PORT || 4000;

app.use(express.json());
app.use(
    cors({
        origin:"*",
        credentials:true,
    })
)
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:"/tmp"
}))


app.use("/api",uploadRoute)


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Server is fine and running"
    })
})

app.listen(PORT,()=>{
    console.log("App is running at port: ",PORT);
})