import { z } from "zod";
export const SignUpValidation = z.object({
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 characters long' })
  .regex(/^\d{10}$/, { message: 'Phone number must contain only digits' }),
  fullName:z.string().min(3,{message:"To Short"}),
  email: z.string().min(5,{message:"To Short"}),
  password: z.string().min(8,{message:"Password must be atleast 4 character"})
});
export const SignInValidation = z.object({
  email: z.string().min(5,{message:"To Short"}),
  password: z.string().min(8,{message:"Password must be atleast 4 character"})
});

export const EnrollCourseValidation=z.object({
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 characters long' })
  .regex(/^\d{10}$/, { message: 'Phone number must contain only digits' }),
  fullName:z.string().min(3,{message:"To Short"}),
  email: z.string().min(5,{message:"To Short"}),
  price:z.number().min(99)
});