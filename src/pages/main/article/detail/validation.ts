import { z } from "zod"

export const schemaValidation = z.object({
    comment: z.string().min(1, { message: "Comment is required" })  
})

export type CommentFormFields = z.infer<typeof schemaValidation>