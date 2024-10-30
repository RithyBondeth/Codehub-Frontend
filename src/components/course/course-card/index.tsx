import { useTranslation } from "react-i18next";
import { AnimationButton } from "../../utilities/buttons/animation";
import { CourseCardType } from "./type";

export default function CourseCard(props: CourseCardType) {
    const { t } = useTranslation()

    return (
        <div className="relative flex flex-col justify-between p-3 shadow-normal duration-300 hover:shadow-3d-primary">
            <div className="w-full">
                <img src={props.poster} alt="course-image" className="w-full h-44 duration-300 hover:scale-105 tablet-lg:min-h-48 tablet-xl:h-32"/>
                <div className="absolute top-4 right-4 p-2 rounded-lg text-xs bg-white dark:bg-dark">{t("pages.course.course-card.additional-label")}</div>
                <div className="flex flex-col justify-start gap-1 py-3">
                    <p className="font-semibold">{props.title}</p>
                    <p className="text-xs leading-5">{props.description}</p>
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <p className="font-medium text-sm text-primary">{t("pages.course.course-card.price")}: {props.price}</p>
                <AnimationButton label={t("pages.course.course-card.enroll-button")} className="text-xs w-fit" onClick={props.enrollOnClick}/>
            </div>
        </div>
    )
} 