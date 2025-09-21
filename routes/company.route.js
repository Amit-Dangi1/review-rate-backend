import express from "express"
import { createCompany, getCompany, getOneCompany } from "../controller/company.controller.js"
import { body } from "express-validator"

const router = express.Router()

router.post("/",body("name","name is required").notEmpty(),body("location","location is required").notEmpty(),
                body("foundedOn","foundedOn is required").notEmpty(),body("city","city is required").notEmpty(),createCompany);
router.get("/",getCompany)
router.get("/:id",getOneCompany);

export default router