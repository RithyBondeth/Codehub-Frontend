import { useTranslation } from "react-i18next"
import Divider from "../../../components/utilities/styles/divider"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"
import WorkCard from "../../../components/work/work-card"
import { useLanguageStore } from "../../../stores/language/language.store"
import { workData } from "./detail/data"
import { useEffect } from "react"
import gsap from "gsap"

export default function WorkPage() {
    useDynamicTitle()
    const { t } = useTranslation()
    const { language } = useLanguageStore()
   
    useEffect(() => {
        gsap.from("#work-box", { duration: 1, x: -500, opacity: 0, ease: "power1.out"})
        gsap.to("#work-box", { duration: 1, x: 0, opacity: 1, ease: "power1.out" })

        gsap.from("#title-box", { duration: 1, y: 100, opacity: 0, ease: "power1.out"})
        gsap.to("#title-box", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
    }, [])
    
    return (
        <div className="container my-10">
            {/* Label Section */}
            <div id="work-box" className="flex flex-col items-center gap-5 mb-5">
                <p id="title-box" className="text-3xl font-medium">{t("web-title.work")}</p>
                <div id="title-box" className="w-full flex items-center gap-2">
                    <p className="text-md text-nowrap">{language === "kh" ? `${t("web-title.work")}ទាំងអស់` : `All ${t("web-title.work")}s`}</p>
                    <Divider/>
                </div>
            </div>
            {/* Work Card Section */}
            <div id="work-box" className="grid grid-cols-3 gap-3 tablet-lg:grid-cols-2 tablet-sm:flex tablet-sm:flex-col tablet-sm:mx-2">
                <WorkCard
                    title={language === "en" ? workData.card.title : workData.card.titleKhmer}
                    description={language === "en" ? workData.card.description : workData.card.descriptionKhmer}
                    poster={workData.card.poster}
                />
                <WorkCard
                    title={"BondethTech - Completed Ecommerce APIs with NestJs"}
                    description={language === "en" ? workData.card.description : workData.card.descriptionKhmer}
                    poster={"https://miro.medium.com/v2/resize:fit:1200/1*ncsqje8XNcWYy-wmIufeaw.jpeg"}
                />
            </div>
        </div>
    )
}