export type WorkDataType = {
    id: number
    title: string
    khmerTitle: string
    description: string
    khmerDescription: string
    author: string
    thumbnail: string
    poster: string
    content: string
    github: string
    createdAt: string   
}

export type GetAllWorkState = {
    data: WorkDataType[] | null,
    loading: boolean,
    error: string | null
    fetchAllWork: (apiUrl: string) => Promise<void>
} 