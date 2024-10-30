import { Link, useNavigate } from "react-router-dom"
import { AnimationButton } from "../../../components/utilities/buttons/animation"
import { InputField } from "../../../components/utilities/forms/input"
import { FacebookLogo, GithubLogo, GoogleLogo } from "../../../constants/auth/auth.constant"
import { codeHubLogoPng } from "../../../constants/header/header.constant"
import { useVisibilityStore } from "../../../stores/auth/auth.store"
import { useTranslation } from "react-i18next"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"
import { useThemeStore } from "../../../stores/theme/theme.store"
import { useEffect } from "react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { SigninFormFields, validationSchema } from "./validation"
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignInStore, useSocialSignInStore } from "../../../stores/api/auth/auth.store"
import { useLanguageStore } from "../../../stores/language/language.store"
import { FACEBOOK_SIGNIN_URL, GITHUB_SIGNIN_URL, GOOGLR_SIGNIN_URL } from "../../../constants/api/auth.api"

export default function SigninPage() {
    useDynamicTitle()
    
    const { visibility, setVisibility } = useVisibilityStore()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const langauge = useLanguageStore((state) => state.language)

    const theme = useThemeStore((state) => state.theme)
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    const { token, loading, error, signIn } = useSignInStore()
    const { socialSignIn } = useSocialSignInStore()

    const { register, handleSubmit, formState, reset } = useForm<SigninFormFields>({ resolver: zodResolver(validationSchema) })

    const onSubmit: SubmitHandler<SigninFormFields> = async (data) => {
        await signIn(data.email, data.password)

        reset()
    }

    useEffect(() => {
        if(token) {
            navigate("/profile")   
        }
    })

    return (
        <div className="h-screen w-screen flex justify-between items-center">
            {/* Logo Section */}
            <div className="h-full w-1/2 flex justify-center items-center bg-white dark:bg-dark tablet-xl:w-[40%] tablet-md:hidden">
               <div className="flex justify-center items-center">
                    <img src={codeHubLogoPng} alt="codeHubLogo" className="w-1/3"/>
                    <div className="flex flex-col items-start text-6xl [&>p]:font-bold">
                        <p>Code</p>
                        <p>Hub</p>
                    </div>
               </div>
            </div>
             {/* Form Section */}
            <div className="relative  h-full w-1/2 flex justify-center items-center bg-primary tablet-xl:w-[60%] tablet-md:min-w-full">
                {loading && <div className="absolute top-[40%] flex items-center gap-2 rounded-md shadow-md bg-white dark:bg-dark text-sm p-5">
                    <p>{langauge === "kh" ? "សូមមេត្តារង់ចាំ" : "Signin"}</p>
                    <span className="loading loading-spinner loading-md"></span>
                </div>}
                {error && <div className="absolute top-[40%] flex items-center gap-2 rounded-md shadow-md bg-white dark:bg-dark text-sm p-5">
                    <p>{error}</p>
                    <p className="underline cursor-pointer" onClick={() => window.location.reload()}>{langauge === "kh" ? "ព្យាយាមម្តងទៀត" : "Try Again"}</p>    
                </div>}
                <div className="w-2/3 p-7 flex flex-col items-center rounded-lg bg-white dark:bg-dark tablet-lg:w-[85%] phone-lg:min-w-[95%]">
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <img src={codeHubLogoPng} alt="Codehub Logo" className="size-10"/>
                        <p className="text-xl font-semibold">{t("auth.signin.welcome")}</p>
                    </div>
                    <form className="w-full flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Field Section */}
                        <div className="w-full mt-4">
                            <InputField
                                preffixIcon="email"
                                type="text"
                                id="email"
                                {...register("email")}
                                placeholder={t("auth.signin.email-placeholder")}
                            />
                            {formState.errors.email && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.email.message}</p>
                            </div>}                          
                        </div>
                        {/* Password Field Section */}
                        <div className="w-full mt-4">
                            <InputField
                                preffixIcon="lock"
                                suffixIcon={visibility ? "visibility_off" : "visibility"}
                                suffixClick={setVisibility}
                                type={visibility ? "text" : "password"}
                                id="password"
                                {...register("password")}
                                placeholder={t("auth.signin.password-placeholder")}
                            />
                            {formState.errors.password && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.password.message}</p>
                            </div>}
                        </div>
                        <div className="w-full flex justify-end my-3">
                            <p className="text-xs cursor-pointer hover:text-primary" onClick={() => navigate("/forgot-password")}>{t("auth.signin.forgot-password")}</p>
                        </div>
                        <AnimationButton type="submit" label={t("auth.signin.signin-button")} className="text-xs"/>
                        <p className="text-xs mb-5 mt-6">{t("auth.signin.continue-with")}</p>
                        <div className="flex justify-center items-center gap-3 [&>img]:cursor-pointer [&>img]:size-8 [&>img]:rounded-full">
                            <img src={GoogleLogo} alt="google icon" onClick={() => socialSignIn(GOOGLR_SIGNIN_URL)}/>
                            <img src={FacebookLogo} alt="facbook icon" onClick={() => socialSignIn(FACEBOOK_SIGNIN_URL)}/>
                            <img src={GithubLogo} alt="github icon" onClick={() => socialSignIn(GITHUB_SIGNIN_URL)}/>
                        </div>
                        <p className="text-xs mt-6">
                            {t("auth.signin.no-account")} 
                            <Link to="/signup" className="ml-1 cursor-pointer text-primary">{t("auth.signin.register")}</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}