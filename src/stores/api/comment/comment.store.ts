import { create } from "zustand";
import { CountCommentState, GetAllCommentState, PostCommentState } from "./type";
import axios from "axios";

export const usePostCommentStore = create<PostCommentState>()((set) => ({
    data: null, 
    loading: false,
    error: null,
    postComment: async (apiUrl: string, token: string, content: string, articleId: string) => {
        set({ loading: true, error: null })

        try {
            const response = await axios.post(apiUrl, { 
                content: content,
                articleId: parseInt(articleId)
            },{
                headers: { Authorization: `Bearer ${token}` }
            })

            set({ loading: false, data: response.data })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while posting comment" })
            }
        }
    }
}))

export const useGetAllCommentStore = create<GetAllCommentState>()((set) => ({
    data: null,
    loading: false,
    error: null,
    fetchComments: async (apiUrl: string) => {
        set({ loading: true, error: null })

        try {
            const response = await axios.get(apiUrl) 

            console.log("Comment", response.data)

            set({ loading: false, data: response.data })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while getting comment" })
            }
        }
    } 
}))

export const useCountCommentStore = create<CountCommentState>()((set) => ({
    data: null,
    loading: false,
    error: null,
    fetchCountComment: async (apiUrl: string) => {
        set({ loading: false, error: null })

        try {
            const response = await axios.get(apiUrl)

            console.log("Count Comment", response.data)
            set({ loading: false, data: response.data.count })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while counting comment" })
            }
        }
    }
}))