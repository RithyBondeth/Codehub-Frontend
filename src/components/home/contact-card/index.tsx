import { useTranslation } from "react-i18next";
import { ourSocialList } from "../../../constants/home/home.constant";
import Divider from "../../utilities/styles/divider";
import { InputField } from "../../utilities/forms/input";
import { AnimationButton } from "../../utilities/buttons/animation";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormFields, validationSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import TextArea from "../../utilities/forms/textarea";

export default function ContactCard() {
    const { t } = useTranslation()
    const { register, handleSubmit, formState, reset } = useForm<ContactFormFields>({ resolver: zodResolver(validationSchema) })

    const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
        console.log(data)
        reset()
    }

    return (
        <div className="w-full flex flex-col items-center gap-5">
            <p className="text-3xl text-center font-medium tablet-md:text-2xl phone-xl:text-xl">{t("pages.home.home-contact.label")}</p>
            <Divider/>
            <div className="flex flex-col items-center gap-5">
                <p>{t("pages.home.home-contact.contact-social.label")}</p>
                <div className="flex items-center justify-center gap-5 phone-lg:gap-2">
                    {ourSocialList.map((social) => (
                        <Link to={social.link} key={social.id} target="_blank">
                            <img src={social.icon} alt={social.icon} className="h-12 rounded-full cursor-pointer duration-300 hover:scale-110"/>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-5 mt-5">
                <p>{t("pages.home.home-contact.contact-email.label")}</p>
                <form className="w-full flex flex-col items-end gap-5 tablet-md:w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full">
                        <InputField 
                            preffixIcon="person" 
                            type="text" 
                            id="username" 
                            placeholder={t("pages.home.home-contact.contact-email.username-placeholder")} 
                            className="py-2" 
                            {...register("username")}
                        />
                        {formState.errors.username && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.username.message}</p>
                        </div>}    
                    </div>
                    <div className="w-full">
                        <InputField 
                            preffixIcon="email" 
                            type="email" 
                            id="email" 
                            placeholder={t("pages.home.home-contact.contact-email.email-placeholder")} 
                            className="py-2" 
                            {...register("email")}
                        />
                        {formState.errors.email && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.email.message}</p>
                        </div>}  
                    </div>
                    <div className="w-full">
                        <TextArea 
                            id="message"
                            placeholder={t("pages.home.home-contact.contact-email.message-placeholder")} 
                            className="mt-3 py-2" 
                            {...register("message")}
                        />
                        {formState.errors.message && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.message.message}</p>
                        </div>}  
                    </div>
                    <AnimationButton type="submit" label={t("pages.home.home-contact.contact-email.send-button")} icon="send" className="text-sm"/>
                </form>
            </div>
        </div>
    )
}