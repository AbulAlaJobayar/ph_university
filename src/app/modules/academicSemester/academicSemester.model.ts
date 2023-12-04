import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemesterConst';


const academicSemesterSchema = new Schema<TAcademicSemester>({
    name:{
      type:String,
     required:true,
     enum:AcademicSemesterName
    },
    code:{
      type:String,
      required:true,
      enum:AcademicSemesterCode
    },
    year:{
      type:String,
      required:true
      
    },
    startMonth:{
      type:String,
      enum:Months
    },
    endMonth:{
      type:String,
      enum:Months
    }
  },
  {
    timestamps:true
  });
  
 export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema);
  