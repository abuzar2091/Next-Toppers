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
export const formValidationSchema = z.object({
  studentEmail: z.string().email({ message: 'Invalid email address' }),
});

export const ApplyAsMentorValidation = z.object({
  fullName:z.string().min(3,{message:"To Short"}),
  email: z.string().min(5,{message:"To Short"}),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 characters long' })
  .regex(/^\d{10}$/, { message: 'Phone number must contain only digits' }),
  address: z.string().min(8,{message:"To Short"}),
  education:z.string().min(8,{message:"To Short"}),
  resume:z.string().min(4,{message:"To Short"}),
  experience:z.string(),
  linkedinUrl:z.string(),
  subjects: z.array(z.string()).min(1, { message: "At least one subject is required" })
});