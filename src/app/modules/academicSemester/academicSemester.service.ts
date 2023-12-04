import { TAcademicSemesterCode } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicServiceIntoDB= async(payload:TAcademicSemesterCode)=>{
    const result =await AcademicSemester.create(payload)
    return result
}
export const academicSemesterService={
    createAcademicServiceIntoDB
}