import { z } from "zod"

export const NewPasswordSchema = z.object({
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

export type NewPasswordFormFields = z.infer<typeof NewPasswordSchema>