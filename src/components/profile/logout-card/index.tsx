import { useTranslation } from "react-i18next";
import { AnimationButton } from "../../utilities/buttons/animation";

export default function LgoutCard() {
    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col items-start gap-5">
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-medium">{t("pages.profile.logout.label")}</p>
                <p className="text-sm">{t("pages.profile.logout.description")}</p>
            </div>
            <div className="w-full flex items-start">
                <AnimationButton label={t("pages.profile.logout.button")} className="text-sm" onClick={() => {}}/>
            </div> 
        </div>
    )   
}