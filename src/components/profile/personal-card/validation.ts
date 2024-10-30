import { z } from "zod"

export const personalInfoSchema = z.object({
    username: z.string().min(1, { message: "Username is required to update" }),
    gender: z.string().min(1, { message: "Gender is required to update" }),
    dob: z.string()
        .refine((value) => {
            // Check if the date is in a valid format (yyyy-mm-dd) and is a real date
            const date = new Date(value);
            return !isNaN(date.getTime()); // Returns false if the date is invalid
        }, {
            message: "Date of Birth is required to update",
        }),
    email: z.string().email({ message: "Email is required to update" }),
})

export type PersonalInfoFields = z.infer<typeof personalInfoSchema>