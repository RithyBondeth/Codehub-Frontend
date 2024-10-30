import { z } from "zod"

export const validationSchema = z.object({
    email: z.string()
            .email({ message: "Email is required" }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .refine((password) => password.match(/(?=.*[A-Za-z])(?=.*\d).+$/), 
        { message: "Password must be at least one number and letter" }),
})

export type SigninFormFields = z.infer<typeof validationSchema>