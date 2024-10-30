export type ContactState = {
    username: string 
    email: string
    message: string
    postData: (apiUrl: string, token: string) => void
}