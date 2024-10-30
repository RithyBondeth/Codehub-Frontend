import { z } from "zod"

export const forgotPasswordSchema = z.object({
    email: z.string().email({ message: "Email is required" }),
})

export type ForgotPasswordFormFields = z.infer<typeof forgotPasswordSchema>;