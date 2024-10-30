export type VisionDataType = {
    id: number
    title: string
    khmerTitle: string
    description: string
    khmerDescription: string
    image: string
}

export type VisionState = {
    data: VisionDataType[] | null,
    loading: boolean
    error: string | null
    fetchData: (apiUrl: string) => void
}