import { create } from "zustand";
import { ArticleState, SingleArticleState } from "./type";
import axios from "axios";
import { ARTICLE_BY_ID_URL } from "../../../constants/api/article.api";

export const useArticleStore = create<ArticleState>()((set) => ({
    data: null,
    loading: false,
    error: null,
    fetchData: async (apiUrl: string) => {
        set({ loading: true, error: null })   
        try {
            const response = await axios.get(apiUrl)
            set({ loading: false, data: response.data })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while fetching data"})
            }
        }
    },
}))

export const useSingleArtileStore = create<SingleArticleState>()((set) => ({
   data: null,
   loading: false,
   error: null,
   fetchSingleData: async (articleId: string) => {
        set({ loading: true, error: null })
        try {
            const response = await axios.get(ARTICLE_BY_ID_URL(articleId))
            set({ loading: false, data: response.data })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while fetching"})
            }
        }
   }
}))

