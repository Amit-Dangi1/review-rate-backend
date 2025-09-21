import  { Review } from "../model/review_model.js"
 import mongoose from "mongoose"
import { validationResult } from "express-validator"

export const createReview = async (req, res, next) => {
    try {

        let id = req.params
        if(!id)
        return res.status(401).json({ msg: "Please Provide Id"})
        let datavalidator = validationResult(req);
        if(!datavalidator.isEmpty())
        return res.status(401).json({ msg: "Bad request" ,error:datavalidator.array()[0].msg});


        let { fullName, subject, reviewText, rating } = req.body
        console.log(fullName);
        console.log(subject);
        console.log(reviewText);
        console.log(rating);
        
        

        let rev = await Review.create({ companyId: new mongoose.Types.ObjectId(id), fullName, subject, reviewText, rating })

        return res.status(200).json({ msg: "review created successfully" ,rev})
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error" })
    }
}

export const getReview = async (req, res, next) => {
    try {

        let id = req.params
        if(!id)
            return res.status(401).json({msg:"Please Provide Id"});
        let reviews = await Review.find({companyId:new mongoose.Types.ObjectId(id)})

        return res.status(200).json({ reviews })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error" })
    }
} 