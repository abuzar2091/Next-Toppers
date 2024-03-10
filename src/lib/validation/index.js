import { z } from "zod";
export const SignUpValidation = z.object({
  name: z.string().min(3,{message:"To Short"}),
  
  email: z.string().min(5,{message:"To Short"}),
  password: z.string().min(8,{message:"Password must be atleast 4 character"})
});
export const SignInValidation = z.object({
  email: z.string().min(5,{message:"To Short"}),
  password: z.string().min(8,{message:"Password must be atleast 4 character"})
});