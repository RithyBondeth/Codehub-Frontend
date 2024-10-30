import { z } from "zod"

export const ChangePasswordSchema = z.object({
    currentPassword: z.string().min(8, { message: "Current password must be at least 8 characters long" }),
    newPassword: z.string().min(8, { message: "New password must be at least 8 characters long" })
           .refine((password) => password.match(/(?=.*[A-Za-z])(?=.*\d).+$/), { message: "New password must be at least one number and letter" }),
    confirmPassword: z.string().min(8, { message: "Confirm password must be at least 8 characters long" })})
           .superRefine((values, ctx) => {
            if(values.newPassword!== values.confirmPassword) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    path: ['confirmPassword'],
                    message: "Passwords do not match",
                });
            }
})  

export type ChangePasswordFields = z.infer<typeof ChangePasswordSchema>