import { create } from "zustand";
import { MessageType, PostMessageState } from "./type";
import axios from "axios";

export const usePostMessageStore = create<PostMessageState>()((set) => ({
    data: null,
    loading: false,
    error: null,
    postMessage: async (apiUrl: string, token: string, message: MessageType) => {
        set({ loading: true, error: null })

        try {
            const response = await axios.post(apiUrl, {
                username: message.username,
                email: message.email,
                message: message.message
            }, {
                headers: { Authorization: `Bearer ${token}` }
            }) 

            set({ loading: false, data: response.data })
            console.log("Message Console: ", response.data)
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while sending message" })
            }
        }
    }
})) 