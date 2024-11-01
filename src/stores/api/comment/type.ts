export type PostCommentState = {
    data: string | null 
    loading: boolean 
    error: string | null
    postComment: (apiUrl: string, token: string, content: string, articleId: string) => Promise<void>
}

export type CommentDataType = {
    id: number
    content: string
    createdAt: string
    user: {
        id: number
        username: string
        avatar: string
    }
    article: {
        id: number
        title: string
    }
}

export type GetAllCommentState = {
    data: CommentDataType[] | null
    loading: boolean
    error: string | null
    fetchComments: (apiUrl: string) => Promise<void>
}

export type CountCommentState = {
    data: number | null; 
    loading: boolean;
    error: string | null;
    fetchCountComment: (apiUrl: string) => Promise<void>;
}