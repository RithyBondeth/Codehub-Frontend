import { useTranslation } from "react-i18next"
import Divider from "../../../components/utilities/styles/divider"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"
import WorkCard from "../../../components/work/work-card"
import { useLanguageStore } from "../../../stores/language/language.store"
import { useEffect } from "react"
import gsap from "gsap"
import { useGetAllWorkStore } from "../../../stores/api/work/work.store"
import { GET_ALL_WORKS_URL } from "../../../constants/api/work.api"
import WorkSkeletoon from "../../../components/work/work-skeleton"

export default function WorkPage() {
    useDynamicTitle()
    const { t } = useTranslation()
    const { language } = useLanguageStore()
    const { data, loading, error, fetchAllWork } = useGetAllWorkStore()
  
    useEffect(() => {
        gsap.from("#work-box", { duration: 1, x: -500, opacity: 0, ease: "power1.out"})
        gsap.to("#work-box", { duration: 1, x: 0, opacity: 1 })

        gsap.from("#title-box", { duration: 1, y: 100, opacity: 0, ease: "power1.out"})
        gsap.to("#title-box", { duration: 1, y: 0, opacity: 1 })
    })
    
    useEffect(() => {
        fetchAllWork(GET_ALL_WORKS_URL)
    }, [fetchAllWork])
    
    if (loading) {
        return (
            <WorkSkeletoon>
                <div className="flex items-center gap-2 text-lg">
                    <p>{language === "kh" ? "សូមមេត្តារង់ចាំ" : "Loading"}</p>
                    <span className="loading loading-spinner loading-md"></span>
                </div>
            </WorkSkeletoon>
        )
    }

    if (error) {
        return (
            <WorkSkeletoon>
                <div className="text-center mt-10 text-lg">
                    {language === "kh" ? "គ្មានកាងារដែលអាចបង្ហាញបាន" : "There are no work to display"}
                </div>
            </WorkSkeletoon>
        )
    }

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
            {data && data.map((work) => (
                <WorkCard
                    title={language === "en" ? work.title : work.khmerTitle}
                    description={work.description}
                    poster={work.poster}
                />
            ))}
            </div>
        </div>
    )
}