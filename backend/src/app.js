import express from "express";
import { startDbConnection } from "./db/db.js";
import dotenv from "dotenv";
import { Constant } from "./utils/Constant.js";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors";
// import fileUpload from "express-fileupload"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


//  to create and store temporary folder for user uploaded images
// app.use(fileUpload({useTempFiles:true}))

const port = Constant.PORT

const connectionStatus = startDbConnection();

//routes import here
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

app.get("/", (req,res)=>{
  res.status(200).json("Welcome to Task-Sprint API.")
})

// routes use here.
app.use("/auth",authRoutes);
app.use("/user", userRoutes);
app.use("/tasks", taskRoutes);




//custom middleware
app.use(errorHandler);


if (connectionStatus){
    app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`);
        
    })
}else {
   console.error("Database connection failed.")
    process.exit(1);
}

