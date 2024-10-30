import { z } from "zod" 

export const validationSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Email is required" }),
    message: z.string().min(1, { message: "Message is required" }),
})

export type ContactFormFields = z.infer<typeof validationSchema>