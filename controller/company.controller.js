import { validationResult } from "express-validator";
import  { Company } from "../model/company_model.js";
import { Review } from "../model/review_model.js";

export const createCompany = async (req, res, next) => {
    try {
        let datavalidator = validationResult(req);
        if(!datavalidator.isEmpty())
        return res.status(401).json({ msg: "Bad request",error:datavalidator.array()[0].msg})

        let { name, location, foundedOn, city } = req.body;
        let comp = await Company.create({ name, location, foundedOn, city });
        return res.status(200).json({ msg: "Company Added successfully", comp })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error" })
    }
}


export const getCompany = async (req, res, next) => {
    try {


        let comp = await Company.find()

        return res.status(200).json({ comp })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error" })
    }
} 

export const getOneCompany = async(req,res,next)=>{
    try {
      let{id} = req.params
      console.log("company id= = ",id);
      
      if(!id)
        return res.status(401).json({msg:"Please Provide Id"});
    let company = await Company.findOne({_id:id});
    if(!company)
        return res.status(404).json({msg:"Company not Found"});
    let _id = id;
    let reviews = await Review.find({ companyId: _id});
    // console.log("reviews = ",reviews);
    
    return res.status(201).json({company,reviews});  
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Internal Server Error"})
        
    }
}