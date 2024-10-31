import { useTranslation } from "react-i18next";
import { AnimationButton } from "../../utilities/buttons/animation";
import { InputField } from "../../utilities/forms/input";
import { SelectField } from "../../utilities/forms/select";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PersonalInfoFields, personalInfoSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function PersonalCard() {
    const { t } = useTranslation()
    const [dateType, setDateType] = useState<"text" | "date">("text") 
    const [isUpdated, setIsUpdated] = useState(false)
    const profileImageRef = useRef<HTMLInputElement | null>(null)
    const [profileImage, setProfileImage] = useState<string | null>(null)

    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleProfileImageButton = () => {
        profileImageRef.current?.click()
    }

    const { register, handleSubmit, formState, reset  } = useForm<PersonalInfoFields>({ resolver: zodResolver(personalInfoSchema) })
    const onSubmit: SubmitHandler<PersonalInfoFields> = async (data) => {
        console.log(data)
        console.log(profileImage)

        reset()
    }

    return (
        <div className="w-full flex flex-col gap-5">
            <div className="w-full flex justify-between items-center gap-3 tablet-md:flex-col tablet-md:items-start">
                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-medium">{t("pages.profile.personal-profile.label")}</p>
                    <p className="text-sm">{t("pages.profile.personal-profile.description")}</p>
                </div>
                <div className="flex items-center gap-1">
                    {isUpdated && 
                    <AnimationButton 
                        label={t("pages.profile.personal-profile.buttons.cancel")} 
                        className="text-xs" 
                        onClick={() => {
                            setIsUpdated(false)
                            reset()
                        }}
                    />}
                    <AnimationButton label={t("pages.profile.personal-profile.buttons.edit")} className="text-xs" onClick={() => setIsUpdated(true)}/>
                </div>
             </div>
             <div className="w-full flex flex-col items-start gap-5 mt-3">
                <div className="relative h-48 min-w-48 rounded-full overflow-hidden bg-center bg-cover bg-no-repeat bg-gray-200" style={{ backgroundImage: `url(${profileImage})` }}>
                    {isUpdated && <div className="absolute bottom-0 left-0 right-0 h-10 flex justify-center items-center cursor-pointer bg-black text-white" onClick={handleProfileImageButton}>
                        <span className="material-symbols-outlined">camera_alt</span>
                        <input type="file" ref={profileImageRef} onChange={handleProfileImageChange} className="hidden"/>
                    </div>}
                </div>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <table className="table">
                        <tbody>
                        {/* Username Section */}
                        <tr>
                        <th>{t("pages.profile.personal-profile.forms.username.label")}</th>
                            <td> 
                                <div>
                                    <InputField 
                                        type="text" 
                                        id="username" 
                                        placeholder={isUpdated ? `${t("pages.profile.personal-profile.forms.username.placeholder")}` : "Rithy Bondeth"} 
                                        disabled={!isUpdated} 
                                        {...register("username")}
                                    />
                                    {isUpdated && formState.errors.username && <p className="text-xs text-red-500 mt-2">{formState.errors.username.message}</p>}
                                </div>
                            </td>
                        </tr>
                        {/* Gender and Date of Birth Section */}
                        <tr>
                            <th>{t("pages.profile.personal-profile.forms.gender.label")}</th>
                            <td>
                                <div>
                                    <SelectField id="gender" 
                                        disabledLabel="Gender"
                                        className="dark:bg-darklight dark:texßt-dark"
                                        disabled={!isUpdated}
                                        option={[
                                            { id: 1, value: "male", label: t("pages.profile.personal-profile.forms.gender.male") },
                                            { id: 2, value: "female", label: t("pages.profile.personal-profile.forms.gender.female") }
                                        ]}
                                        {...register("gender")}
                                    />
                                    {isUpdated && formState.errors.gender && <p className="text-xs text-red-500 mt-2">{formState.errors.gender.message}</p>}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>{t("pages.profile.personal-profile.forms.dob.label")}</th>
                            <td>
                                <div>
                                    <InputField 
                                        type={dateType} 
                                        id="dob" 
                                        onFocus={() => setDateType("date")}
                                        disabled={!isUpdated}
                                        className={`custom-date-input ${!isUpdated && 'opacity-50'}`}
                                        placeholder={isUpdated ? t("pages.profile.personal-profile.forms.dob.placeholder") : "dd/mm/yyyy"}
                                        {...register("dob")}
                                    />
                                    {isUpdated && formState.errors.dob && <p className="text-xs text-red-500 mt-2">{formState.errors.dob.message}</p>}
                                </div>
                            </td>
                        </tr>
                        {/* Email Address Section */}
                        <tr>
                            <th>{t("pages.profile.personal-profile.forms.email.label")}</th>
                            <td>
                                <div>
                                    <InputField 
                                        type="email" 
                                        id="email" 
                                        placeholder={isUpdated ? `${t("pages.profile.personal-profile.forms.email.placeholder")}` : "rithybondeth999@gmail.com"} 
                                        disabled={!isUpdated} 
                                        {...register("email")}
                                    />
                                    {isUpdated && formState.errors.email && <p className="text-xs text-red-500 mt-2">{formState.errors.email.message}</p>}
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {isUpdated && <div className="w-full flex justify-end">
                        <AnimationButton type="submit" label={t("pages.profile.personal-profile.buttons.save")} className="text-xs"/>
                    </div>}
                </form>
             </div>
        </div>
    )   
}