export type ArticleState = {
    data: ArticleDataType[] | null
    loading: boolean
    error: string | null
    fetchData: (apiUrl: string) => Promise<void>
}

export type SingleArticleState ={
    data: ArticleDataType | null
    loading: boolean
    error: string | null
    fetchSingleData: (articleId: string) => Promise<void>
}

export type ArticleDataType = {
    id: number
    title: string
    khmerTitle: string
    description: string
    author: string
    thumbnail: string
    poster: string
    content: string
    createdAt: string
}