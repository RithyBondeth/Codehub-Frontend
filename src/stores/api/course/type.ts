export type CourseDataType = {
    id: number
    title: string
    description: string
    khmerTitle: string
    khmerDescription: string
    duration: string
    price: string
    thumbnail: string
    poster: string
}

export type GetAllCourseState = {
    data: CourseDataType[] | null,
    loading: boolean,
    error: string | null,
    fetchAllCourse: (apiUrl: string) => Promise<void>
}