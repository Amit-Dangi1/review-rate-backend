import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
import companyRouter from "./routes/company.route.js"
import reviewRouter from "./routes/reviews.route.js"
import cors  from "cors";


mongoose.connect(process.env.DB_URL).then(() => {

    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({extended:true}));
       app.use(cors({
  origin: "https://review-rate-frontend.onrender.com", // your frontend
  credentials: true                 // This allows cookies to be sent
}))
    app.use("/company", companyRouter)
    app.use("/reviews", reviewRouter)
    app.listen(3000, () => {
        console.log("server started");

    })

}).catch((err) => {
    console.log("Database connection failed");
    console.log(err);

})