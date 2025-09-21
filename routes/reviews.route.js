import express from "express"
import { createReview, getReview } from "../controller/reviews.controller.js"
import { body } from "express-validator"

const router = express.Router()

router.post("/:id",body("fullName","Fullname is required").notEmpty(),body("subject","Subject is required").notEmpty(),
                   body("reviewText","Review Text is required").notEmpty(),body("rating","Rating is required").notEmpty(),createReview)
router.get("/:id",getReview)

export default router