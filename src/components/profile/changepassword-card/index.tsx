import { useState } from "react";
import { AnimationButton } from "../../utilities/buttons/animation";
import { InputField } from "../../utilities/forms/input";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChangePasswordFields, ChangePasswordSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ChangePasswordCard() {
    const { t } = useTranslation()
    const [isUpdated, setIsUpdated] = useState(false)

    const { register, handleSubmit, formState, reset } = useForm<ChangePasswordFields>({ resolver: zodResolver(ChangePasswordSchema) })
    const onSubmit: SubmitHandler<ChangePasswordFields> = async (data) => {
        console.log(data)

        reset()
    }

    return (
        <div className="w-full flex flex-col items-start gap-5">
            <div className="w-full flex justify-between items-center gap-3 tablet-md:flex-col tablet-md:items-start">
                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-medium">{t("pages.profile.change-password.label")}</p>
                    <p className="text-sm">{t("pages.profile.change-password.description")}</p>
                </div>
                <div className="flex items-center gap-2">
                    {isUpdated && 
                    <AnimationButton 
                        label={t("pages.profile.change-password.buttons.cancel")} 
                        className="text-xs" 
                        onClick={() => {
                            setIsUpdated(false)
                            reset()
                        }}
                    />}
                    <AnimationButton label={t("pages.profile.change-password.buttons.edit")}  className="text-xs" onClick={() => setIsUpdated(true)}/>
                </div>
            </div>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <table className="table">
                    <tbody>
                    {/* Current Password Section */}
                    <tr className="tablet-md:flex">
                        <th className="w-1/3 flex items-center gap-1 text-nowrap">
                            <span className="material-symbols-outlined tablet-md:hidden">lock</span>
                            <p className="tablet-md:text-xs">{t("pages.profile.change-password.forms.current-password.label")}</p>
                        </th>
                        <td className="w-2/3">
                            <div>
                                <InputField 
                                    type="text" 
                                    id="currentPassword" 
                                    disabled={!isUpdated} 
                                    placeholder={t("pages.profile.change-password.forms.current-password.placeholder")}  
                                    {...register("currentPassword")}
                                />
                                {isUpdated && formState.errors.currentPassword && <p className="text-xs text-red-500 mt-2">{formState.errors.currentPassword.message}</p>}
                            </div>
                        </td>
                    </tr>
                    {/* New Password Section */}
                    <tr className="tablet-md:flex">
                        <th className="w-1/3 flex items-center gap-1 text-nowrap">
                            <span className="material-symbols-outlined tablet-md:hidden">lock</span>
                            <p className="tablet-md:text-xs">{t("pages.profile.change-password.forms.new-password.label")} </p>
                        </th>
                        <td className="w-2/3">
                            <div>
                                <InputField 
                                    type="text" 
                                    id="newPassword"
                                    disabled={!isUpdated} 
                                    placeholder={t("pages.profile.change-password.forms.new-password.placeholder")}  
                                    {...register("newPassword")}
                                />
                                {isUpdated && formState.errors.newPassword && <p className="text-xs text-red-500 mt-2">{formState.errors.newPassword.message}</p>}
                            </div>
                        </td>
                    </tr>
                    {/* Confirm Password Section */}
                    <tr className="tablet-md:flex">
                        <th className="w-1/3 flex items-center gap-1 text-nowrap">
                            <span className="material-symbols-outlined tablet-md:hidden">lock</span>
                            <p className="tablet-md:text-xs">{t("pages.profile.change-password.forms.confirm-password.label")} </p>
                        </th>
                        <td className="w-2/3">
                            <div>
                                <InputField 
                                    type="text" 
                                    id="confirmPassword" 
                                    disabled={!isUpdated} 
                                    placeholder={t("pages.profile.change-password.forms.confirm-password.placeholder")}  
                                    {...register("confirmPassword")}
                                />
                                {isUpdated && formState.errors.confirmPassword && <p className="text-xs text-red-500 mt-2">{formState.errors.confirmPassword.message}</p>}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                {isUpdated && <div className="w-full flex justify-end">
                    <AnimationButton type="submit" label={t("pages.profile.change-password.buttons.save")}  className="text-xs"/>
                </div>}
            </form>
        </div>
    )   
}