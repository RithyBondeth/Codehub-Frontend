import { useTranslation } from "react-i18next"
import Divider from "../../utilities/styles/divider"

export default function BackgroundCard() {
    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col items-center gap-10">
            <p className="text-3xl font-medium">{t("pages.about.background.background-label")}</p>
            <Divider/>
            <div className="flex flex-row-reverse items-start gap-10 tablet-md:flex-col">
                <div className="flex flex-col items-start gap-5">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl">school</span>
                        <p className="text-xl font-semibold">{t("pages.about.background.education-label")}</p>
                    </div>
                    <ul className="steps steps-vertical">
                        <li className="step step-error pb-8">
                            <div className="flex flex-col items-start gap-2 [&>p]:text-start">
                                <p className="text-xl font-medium">{t("pages.about.background.education.college.year")}</p>
                                <p className="text-md">{t("pages.about.background.education.college.major")}</p>
                                <p className="text-md text-start">{t("pages.about.background.education.college.name")}</p>
                            </div>
                        </li>
                        <li className="step step-error">
                            <div className="flex flex-col items-start gap-2 [&>p]:text-start">
                                <p className="text-xl font-medium">{t("pages.about.background.education.highschool.year")}</p>
                                <p className="text-md">{t("pages.about.background.education.highschool.major")}</p>
                                <p className="text-md">{t("pages.about.background.education.highschool.name")}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start gap-5">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl">business_center</span>
                        <p className="text-xl font-semibold">{t("pages.about.background.experience-label")}</p>
                    </div>
                    <ul className="steps steps-vertical">
                        <li className="step step-error pb-8">
                            <div className="flex flex-col items-start gap-2 [&>p]:text-start">
                                <p className="text-lg font-medium">{t("pages.about.background.experience.freelance.year")}</p>
                                <p className="text-md text-start">{t("pages.about.background.experience.freelance.major")}</p>
                                <p className="text-md text-start">{t("pages.about.background.experience.freelance.name")}</p>
                            </div>
                        </li>
                        <li className="step step-error">
                            <div className="flex flex-col items-start gap-2 [&>p]:text-start">
                                <p className="text-lg font-medium">{t("pages.about.background.experience.volunteer.year")}</p>
                                <p className="text-md">{t("pages.about.background.experience.volunteer.major")}</p>
                                <p className="text-md text-start">{t("pages.about.background.experience.volunteer.name")}</p>
                            </div>
                        </li>
                        <li className="step step-error">
                            <div className="flex flex-col items-start gap-2 [&>p]:text-start">
                                <p className="text-lg font-medium">{t("pages.about.background.experience.intern.year")}</p>
                                <p className="text-md">{t("pages.about.background.experience.intern.major")}</p>
                                <p className="text-md">{t("pages.about.background.experience.intern.name")}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )   
}