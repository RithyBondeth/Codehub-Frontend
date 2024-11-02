import { create } from "zustand";
import { GetAllCourseState } from "./type";
import axios from "axios";

export const useGetAllCourseStore = create<GetAllCourseState>()((set) => ({
    data: null,
    loading: false,
    error: null,
    fetchAllCourse: async (apiUrl: string) => {
        set({ loading: true, error: null })
        try {
            const response = await axios.get(apiUrl)
            set({ data: response.data, loading: false })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while getting course" })
            }
        }
    }
}))