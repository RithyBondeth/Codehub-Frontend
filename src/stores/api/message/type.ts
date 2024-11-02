export type MessageType = {
    username: string
    email: string
    message: string
}

export type PostMessageState = { 
    data: string | null
    loading: boolean
    error: string | null
    postMessage: (apiUrl: string, token: string, message: MessageType) => Promise<void>
}