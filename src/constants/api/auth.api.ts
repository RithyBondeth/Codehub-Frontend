import { BASE_URL } from "./base.api"

export const SIGNIN_URL = BASE_URL + "api/auth/signin"
export const SIGNUP_URL = BASE_URL + "api/auth/signup"
export const FORGOT_PASSWORD_URL = BASE_URL + "api/auth/forgot-password"
export const RESET_PASSWORD_URL = (resetToken: string) => BASE_URL + `api/auth/reset-password/${resetToken}`

export const GOOGLR_SIGNIN_URL = BASE_URL + "api/auth/google/login"
export const FACEBOOK_SIGNIN_URL = BASE_URL + "api/auth/facebook/login"
export const GITHUB_SIGNIN_URL = BASE_URL + "api/auth/github/login"