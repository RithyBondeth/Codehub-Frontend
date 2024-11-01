import { useTranslation } from "react-i18next";
import { AnimationButton } from "../../utilities/buttons/animation";
import { useAuthenticationStore, useSignInStore, useSocialSignInStore } from "../../../stores/api/auth/auth.store";
import { useNavigate } from "react-router-dom";

export default function LgoutCard() {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const emailToken = useSignInStore((state) => state.token)
    const clearEmailToken = useSignInStore((state) => state.clearToken)

    const setIsAuth = useAuthenticationStore((state) => state.setIsAuth)
    const socailToken = useSocialSignInStore((state) => state.token)
    const clearSocialToken = useSocialSignInStore((state) => state.clearToken)

    return (
        <div className="w-full flex flex-col items-start gap-5">
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-medium">{t("pages.profile.logout.label")}</p>
                <p className="text-sm">{t("pages.profile.logout.description")}</p>
            </div>
            <div className="w-full flex items-start">
                <AnimationButton label={t("pages.profile.logout.button")} className="text-sm" onClick={() => {
                    if(socailToken || emailToken) {  
                        setIsAuth(false)
                        clearSocialToken()   
                        clearEmailToken()
                        navigate("/")
                    } 
                }}/>
            </div> 
        </div>
    )   
}