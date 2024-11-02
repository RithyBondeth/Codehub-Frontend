import { useNavigate } from "react-router-dom";
import { AnimationButton } from "../../utilities/buttons/animation";
import { WorkCardProps } from "./type";
import { useLanguageStore } from "../../../stores/language/language.store";
import Divider from "../../utilities/styles/divider";
import { useTranslation } from "react-i18next";

export default function WorkCard(props: WorkCardProps) {
    const navigate = useNavigate()
    const { language } = useLanguageStore()
    const { t } = useTranslation()

    return (
        <div id="work-box" className="flex flex-col justify-between p-3 shadow-normal duration-300 hover:shadow-3d-primary">
            <img src={props.thumbnail} alt="course-image" className="h-40 duration-300 hover:scale-105 tablet-lg:min-h-44 tablet-xl:h-32"/>
            <Divider/>
            <div className="flex flex-col justify-start gap-2 py-3">
                <p className={`text-md font-semibold ${language === "kh" && "leading-7"}`}>{props.title}</p>
                <p className="text-xs leading-6">{props.description}</p>
            </div>
            <AnimationButton label={t("pages.work.readmore-button")} className="text-xs w-fit" onClick={() => { navigate("/work/1") }}/>
        </div>
    )   
}