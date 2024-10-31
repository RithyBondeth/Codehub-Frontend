import { z } from "zod";

export const resetPasswordSchema = z.object({
    token: z.string().min(25, { message: "Token is required" })
})

export type ResetPasswordFormFields = z.infer<typeof resetPasswordSchema>;