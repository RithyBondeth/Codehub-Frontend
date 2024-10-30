export type ServiceDataType = {
    id: number
    content: string,
    khmerContent: string
    title: string
    khmerTitle: string
    description: string
    khmerDescription: string
    image: string
}

export type ServiceState = {
    data: ServiceDataType[] | null,
    loading: boolean
    error: string | null
    fetchData: (apiUrl: string) => Promise<void>
}