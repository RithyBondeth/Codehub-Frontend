import { useTranslation } from "react-i18next"
import Divider from "../../utilities/styles/divider"
import { useVisionStore } from "../../../stores/api/vision/vision.store"
import { useLanguageStore } from "../../../stores/language/language.store"
import { useEffect } from "react"
import { ALL_VISION_URL } from "../../../constants/api/vision.api"
import VisionSkeleton from "./vision-skeleton"

export default function VisionCard() {
    const { t } = useTranslation()
    const { language } = useLanguageStore()
    const { data, loading, error, fetchData } = useVisionStore()

    useEffect(() => {
        const controller = new AbortController()
        fetchData(ALL_VISION_URL)

        return () => controller.abort()
    }, [fetchData])
   
    if(loading) {
        return (
            <VisionSkeleton>
               <div className="text-center mt-10 flex justify-center items-center gap-2 text-lg">
                    <p>{language === "kh" ? "សូមមេត្តារង់ចាំ" : "Loading"}</p>
                    <span className="loading loading-spinner loading-md"></span>
                </div>
            </VisionSkeleton>
        )
    }

    if(error) {
        return (
            <VisionSkeleton>
                <div className="w-full flex justify-center items-center mt-10 text-lg">
                    {language === "kh" ? "គ្មានសេវាកម្មដែលអាចបង្ហាញបាន" : "There are no services to display"}
                </div>
            </VisionSkeleton>
        )   
    }

    return (
        <div>
            {data && <div className="w-full flex flex-col gap-5">
                <p className="text-3xl text-center font-medium tablet-md:text-2xl phone-xl:text-xl">{t("pages.home.home-vision.label")}</p>
                <Divider/>
                {<div className="flex flex-col gap-5">
                    {data.map((vision, index) => (
                        <div id="vision-box" className={`shadow-md mt-3 px-10 py-3 flex ${index%2 !== 0 && 'flex-row-reverse'} items-start gap-5 cursor-pointer shadow-normal duration-300 hover:shadow-3d-primary tablet-sm:flex-col tablet-sm:items-center`} key={vision.id}>
                            <img src={vision.image} alt={vision.title} className="h-36 p-3 duration-300 hover:scale-105"/>
                            <div className="flex flex-col gap-2 pr-2 tablet-sm:items-center">
                                <p className="text-md font-semibold mb-1">{language === "kh" ? vision.khmerTitle : vision.title}</p>
                                <p className="text-sm leading-7">{language === "kh" ? vision.khmerDescription : vision.description}</p>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>}
        </div>
    )
}