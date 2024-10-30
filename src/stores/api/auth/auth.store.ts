import { create } from "zustand";
import { SocialSignInState, SignInState, SignUpDataType, SignUpState, ForgotPasswordState } from "./type";
import axios from "axios";
import { SIGNIN_URL, SIGNUP_URL } from "../../../constants/api/auth.api";
import { persist } from "zustand/middleware";

export const useSignUpStore = create<SignUpState>()((set) => ({
    token: null,
    loading: false,
    error: null,
    signUp: async (user: SignUpDataType) => {
       set({ loading: true, error: null })

       try {
        const response = await axios.post(SIGNUP_URL, {
            username: user.username,
            gender: user.gender,
            dob: user.dob,
            phone: user.phone,
            email: user.email,
            password: user.password,
        })
        set({ loading: false, token: response.data.accessToken })
        
       } catch (error) {
        if(axios.isAxiosError(error)) {
            set({ loading: false, error: error.message })
        } else {
            set({ loading: false, error: "An error occurred while signing up" })
        }  
       } 
    }
}))

export const useSignInStore = create<SignInState>()(persist((set) => ({
    token: null,
    loading: false,
    error: null,
    signIn: async (email: string, password: string) => {
        set({ loading: true, error: null })

        try {
            const response = await axios.post(SIGNIN_URL, {
                email: email,
                password: password,
            })
            set({ loading: false, token: response.data.accessToken })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while signin"})
            }
        }
    },
    clearToken: () => set({ token: null }) 
}), {
    name: "SignInStore",
    partialize: (state) => ({ token: state.token }), //Store only token
}))

export const useSocialSignInStore = create<SocialSignInState>()(persist((set) => ({
    token: null,
    loading: false,
    error: null,
    socialSignIn: async (apiUrl: string) => {
        set({ loading: true, error: null })

        try {
            window.location.href = apiUrl
            set({ loading: false, error: null })
        } catch (error) {
            console.log(error)
        }
    },
    setToken: (token: string) => set({ token: token }),
    clearToken: () => set({ token: null })
}), {
    name: "SocialSignInStore",
    partialize: (state) => ({ token: state.token }), //Store only token
}))

export const useForgotPasswordStore = create<ForgotPasswordState>((set) => ({
    loading: false,
    error: null,
    forgotPassword: async (apiUrl: string, email: string) => {
        set({ loading: true, error: null })

        try {
            await axios.post(apiUrl, { email: email })
            set({ loading: false, error: null })
        } catch (error) {
            if(axios.isAxiosError(error)) {
                set({ loading: false, error: error.message })
            } else {
                set({ loading: false, error: "An error occurred while sending password reset link" })
            }
        }
    }
}))