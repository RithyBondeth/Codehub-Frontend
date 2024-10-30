import { z } from "zod" 

export const validationSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    gender: z.string().min(1, { message: "Gender is required" }),
    dob: z.string()
        .refine((value) => {
            // Check if the date is in a valid format (yyyy-mm-dd) and is a real date
            const date = new Date(value);
            return !isNaN(date.getTime()); // Returns false if the date is invalid
        }, {
            message: "Date of Birth is required",
        }),
    email: z.string().email({ message: "Email is required" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" })
            .refine((password) => password.match(/(?=.*[A-Za-z])(?=.*\d).+$/),{ message: "Password must be at least one number and letter" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" })})
            .superRefine((values, ctx) => {
                if(values.password !== values.confirmPassword) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        path: ['confirmPassword'],
                        message: "Passwords do not match",
                    });
                }
            })

export type SignupFormFields = z.infer<typeof validationSchema>