import { useTranslation } from "react-i18next"
import { AnimationButton } from "../../../components/utilities/buttons/animation"
import { InputField } from "../../../components/utilities/forms/input"
import { codeHubLogoPng } from "../../../constants/header/header.constant"
import { useVisibilityStore } from "../../../stores/auth/auth.store"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"
import { useThemeStore } from "../../../stores/theme/theme.store"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { SignupFormFields, validationSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { SelectField } from "../../../components/utilities/forms/select"
import { SignUpDataType } from "../../../stores/api/auth/type"
import { useSignUpStore } from "../../../stores/api/auth/auth.store"
import { useLanguageStore } from "../../../stores/language/language.store"
import { useNavigate } from "react-router-dom"

export default function SignupPage() {
    useDynamicTitle()

    const { visibility, setVisibility } = useVisibilityStore()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const langauge = useLanguageStore((state) => state.language)
    
    const theme = useThemeStore((state) => state.theme)
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme]) 

    const { token, loading, error, signUp } = useSignUpStore()
    const { register, handleSubmit, formState, reset } = useForm<SignupFormFields>({ resolver: zodResolver(validationSchema) })

    const onSubmit: SubmitHandler<SignupFormFields> = async (data) => {
        const user: SignUpDataType = {
            username: data.username,
            gender: data.gender as "female" | "male",
            dob: data.dob,
            phone: null,
            email: data.email,
            password: data.password,
        }

        await signUp(user)
    
        reset()
    }

    useEffect(() => {
        if(token) navigate("/signin")
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
            <div className="relative h-full w-1/2 flex justify-center items-center bg-primary tablet-xl:w-[60%] tablet-md:min-w-full">
                {loading && <div className="absolute top-1/2 flex items-center gap-2 rounded-md shadow-md bg-white dark:bg-dark p-5">
                    <p>{langauge === "kh" ? "សូមមេត្តារង់ចាំ" : "Signin"}</p>
                    <span className="loading loading-spinner loading-md"></span>
                </div>}
                {error && <div className="absolute top-1/2 flex items-center gap-2 rounded-md shadow-md bg-white dark:bg-dark text-sm p-5">
                    <p>{error}</p>
                    <p className="underline cursor-pointer" onClick={() => window.location.reload()}>{langauge === "kh" ? "ព្យាយាមម្តងទៀត" : "Try Again"}</p>    
                </div>}
                <div className="w-2/3 p-7 flex flex-col items-center rounded-lg bg-white dark:bg-dark tablet-lg:w-[85%] phone-lg:min-w-[95%]">
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <img src={codeHubLogoPng} alt="Codehub Logo" className="size-10"/>
                        <p className="text-xl font-semibold">{t("auth.signup.welcome")}</p>
                    </div>
                    <form className="w-full flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
                        {/* Username Section */}
                        <div className="w-full mt-4">
                            <InputField 
                                preffixIcon="person"
                                type="text"
                                id="username"
                                {...register("username")}
                                placeholder={t("auth.signup.username-placeholder")}
                            />
                           {formState.errors.username  && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.username.message}</p>
                            </div>}
                        </div>
                        {/* Gender and Date of Birth Section */}
                        <div className="w-full flex justify-center items-start gap-5 [&>input]:w-full mt-4">
                            <div className="w-full">
                                <SelectField
                                    id="gender"
                                    disabledLabel={t("auth.signup.gender-placeholder.disabled")}
                                    className="dark:bg-darklight dark:text-dark"
                                    {...register("gender")}
                                    option={[
                                        { id: 1, value: "male", label: t("auth.signup.gender-placeholder.male") },
                                        { id: 2, value: "female", label: t("auth.signup.gender-placeholder.female") }
                                    ]}
                                />
                                {formState.errors.gender && <div className="w-full flex justify-start mt-1">
                                    <p className="text-xs text-primary">{formState.errors.gender.message}</p>
                                </div>}
                            </div>
                            <div className="w-full">
                                <InputField
                                    type="date"
                                    id="dob"
                                    {...register("dob")}
                                    className="custom-date-input"
                                />
                                {formState.errors.dob && <div className="w-full flex justify-start mt-1">
                                    <p className="text-xs text-primary">{formState.errors.dob.message}</p>
                                </div>}
                            </div>
                        </div>    
                        {/* Email Field Section */}
                        <div className="w-full mt-4">
                            <InputField
                                preffixIcon="email"
                                type="text"
                                id="email"
                                {...register("email")}
                                placeholder={t("auth.signup.email-placeholder")}
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
                                placeholder={t("auth.signup.password-placeholder")}
                            />
                            {formState.errors.password && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.password.message}</p>
                            </div>}
                        </div>
                        {/* Conforim Password Field Section */}
                        <div className="w-full mt-4">
                            <InputField
                                preffixIcon="lock"
                                suffixIcon={visibility ? "visibility_off" : "visibility"}
                                suffixClick={setVisibility}
                                type={visibility ? "text" : "password"}
                                id="confirm-password"
                                {...register("confirmPassword")}
                                placeholder={t("auth.signup.confirm-placeholder")}
                            />
                            {formState.errors.confirmPassword && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.confirmPassword.message}</p>
                            </div>}
                        </div>
                        <AnimationButton type="submit" label={t("auth.signup.signup-button")} className="mt-3 text-xs"/>
                    </form>
                </div>
            </div>
        </div>
    )
}