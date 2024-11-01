import { create } from "zustand"
import { GetAllWorkState } from "./type"
import axios from "axios"

export const useGetAllWorkStore = create<GetAllWorkState>()((set) => ({
    data: null,
    loading: false,
    error: null,
    fetchAllWork: async (apiUrl: string) => {
        set({ loading: true, error: null })
        try {
            const response = await axios.get(apiUrl)

            set({ loading: false, data: response.data })
        } catch (error) {
           if(axios.isAxiosError(error)) {
            set({ loading: false, error: error.message })
           } else {
            set({ loading: false, error: "An error occurred while getting work" })
           }
        }
    }
}))