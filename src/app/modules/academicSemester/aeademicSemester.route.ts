import express from "express";
import { academicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterValidation } from "./academicSemester.validation";
const router=express.Router()
router.post('create-academic-semester',validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema),academicSemesterController.createAcademicSemester);
export const academicSemesterRoutes=router