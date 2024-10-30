import { create } from "zustand";
import axios from 'axios';
import { ServiceState } from "./type";

export const useServiceStore = create<ServiceState>()((set) => ({
    data: null,
    loading: false,
    error: null,
    fetchData: async (apiUrl: string) => {
        set({ loading: true, error: null })
        try {
            const response = await axios.get(apiUrl)
            set({ data: response.data, loading: false })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while fetching data" })
            }
        }
    }
}))