export type SignUpState = {
   token: string | null
   loading: boolean
   error: string | null
   signUp: (user: SignUpDataType) => Promise<void>    
}

export type SignUpDataType = {
    username: string
    gender: "female" | "male"
    dob: string
    phone: string | null
    email: string
    password: string
}

export type SignInState = {
    token: string | null
    loading: boolean
    error: string | null
    signIn: (email: string, password: string) => Promise<void>
    clearToken: () => void
}

export type SocialSignInState = {
    token: string | null
    loading: boolean
    error: string | null
    socialSignIn: (apiUrl: string) => Promise<void>
    setToken: (token: string) => void
    clearToken: () => void
}