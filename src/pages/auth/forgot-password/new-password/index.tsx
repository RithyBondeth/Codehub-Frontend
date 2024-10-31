import { SubmitHandler, useForm } from "react-hook-form";
import { AnimationButton } from "../../../../components/utilities/buttons/animation";
import { InputField } from "../../../../components/utilities/forms/input";
import { codeHubLogoPng } from "../../../../constants/header/header.constant";
import { NewPasswordFormFields, NewPasswordSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useVisibilityStore } from "../../../../stores/auth/auth.store";
import { useResetPasswordStore } from "../../../../stores/api/auth/auth.store";
import { RESET_PASSWORD_URL } from "../../../../constants/api/auth.api";
import { useNavigate } from "react-router-dom";
import { useLanguageStore } from "../../../../stores/language/language.store";

export default function NewPasswordPage() {
    const { t } = useTranslation()
    const language = useLanguageStore((state) => state.language)
    const navigate = useNavigate()
    const { resetToken, resetPassword, loading, error } = useResetPasswordStore()
    const { newVisibility, setNewVisibility, confirmVisibility, setConfirmVisibility } = useVisibilityStore()

    const { register, handleSubmit, formState } = useForm<NewPasswordFormFields>({ resolver: zodResolver(NewPasswordSchema) })

    const onSubmit: SubmitHandler<NewPasswordFormFields> = async (data) => {
        await resetPassword(RESET_PASSWORD_URL(resetToken as string), data.password)
        navigate("/signin")
    }

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
                <div className="w-3/4 p-7 flex flex-col items-center gap-3 rounded-lg bg-white dark:bg-dark tablet-lg:w-[85%] phone-lg:min-w-[95%]">
                    {loading && <div className="absolute top-[45%] flex items-center gap-2 rounded-md shadow-md bg-white dark:bg-dark text-sm p-5">
                            <p>{language === "kh" ? "សូមមេត្តារង់ចាំ" : "Waiting"}</p>
                            <span className="loading loading-spinner loading-md"></span>
                        </div>}
                        {error && <div className="absolute top-[45%] flex items-center gap-2 rounded-md shadow-md bg-white dark:bg-dark text-sm p-5">
                            <p>{error}</p>
                            <p className="underline cursor-pointer" onClick={() => window.location.reload()}>{language === "kh" ? "ព្យាយាមម្តងទៀត" : "Try Again"}</p>    
                    </div>}
                    <div className="flex items-center justify-center gap-1 mb-2">
                        <img src={codeHubLogoPng} alt="Codehub Logo" className="size-10"/>
                        <p className="text-xl font-semibold">{t("auth.new-password.label")}</p> 
                    </div>
                    <p className="text-sm leading-6">{t("auth.new-password.description")}</p>
                    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <InputField 
                                type={newVisibility ? "text" : "password"} 
                                id="passowrd" 
                                preffixIcon="lock" 
                                suffixIcon={newVisibility ? "visibility_off" : "visibility"}
                                suffixClick={setNewVisibility}
                                placeholder={t("auth.new-password.newpassword-placeholder")} 
                                {...register("password")} 
                            />
                            {formState.errors.password && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.password.message}</p>
                            </div>}
                        </div>
                        <div>
                            <InputField 
                                type={confirmVisibility ? "text" : "password"} 
                                id="confirmPassword"
                                preffixIcon="lock" 
                                suffixIcon={confirmVisibility ? "visibility_off" : "visibility"}
                                suffixClick={setConfirmVisibility}
                                placeholder={t("auth.new-password.confirm-password-placeholder")} 
                                {...register("confirmPassword")} 
                            />
                            {formState.errors.confirmPassword && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.confirmPassword.message}</p>
                            </div>}
                        </div>
                        <AnimationButton type="submit" label={t("auth.new-password.button")} className="text-xs"/>
                    </form>
                </div>
            </div>  
        </div>
    )   
}