import { WorkCardProps } from "./type";
import { useLanguageStore } from "../../../stores/language/language.store";
import Divider from "../../utilities/styles/divider";
import { useTranslation } from "react-i18next";

export default function WorkCard(props: WorkCardProps) {
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
            <div 
                className="w-fit flex justify-center items-center gap-1 p-2 rounded-lg text-white bg-secondary cursor-pointer border-2 border-transparent duration-300 hover:scale-105 hover:text-secondary hover:border-secondary hover:bg-white"
                onClick={props.onClick}
            >
                <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="github-icon" className="rounded-full h-6"/>
                <p className="text-xs">{t("pages.work.getcode-button")}</p>
            </div>
        </div>
    )   
}