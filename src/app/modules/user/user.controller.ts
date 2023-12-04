import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
const createStudent = catchAsync(async (
  req,
  res,
) => {
    const { password, student: studentData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  
});

export const UserControllers = {
  createStudent,
};
