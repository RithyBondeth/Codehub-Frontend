import { useTranslation } from "react-i18next"
import Divider from "../../utilities/styles/divider"
import gsap from "gsap"
import { useEffect } from "react"
import { useServiceStore } from "../../../stores/api/service/service.store"
import { ALL_SERVICE_URL } from "../../../constants/api/service.api"
import { useLanguageStore } from "../../../stores/language/language.store"
import ServiceSkeleton from "./service-skeleton"
import { useDrawerStore } from "../../../stores/drawer/drawer.store"


export default function ServiceCard() { 
    const { t } = useTranslation()    
    const isOpen = useDrawerStore((state) => state.isOpen)
    const { language } = useLanguageStore()
    const { data, loading, error, fetchData } = useServiceStore()

   useEffect(() => {
    gsap.from("#service-box", { duration: 1,x: 500, opacity: 0, ease: "power1.out"})
    gsap.to("#service-box", { duration: 1, x: 0, opacity: 1, ease: "power1.out" })
   })

   useEffect(() => {
        const controller = new AbortController()
        fetchData(ALL_SERVICE_URL)

        return () => controller.abort()
   }, [fetchData])

   if(loading) {
        return (
            <ServiceSkeleton>
                <div className="text-center mt-10 flex items-center gap-2 text-lg">
                    <p>{language === "kh" ? "សូមមេត្តារង់ចាំ" : "Loading"}</p>
                    <span className="loading loading-spinner loading-md"></span>
                </div>
            </ServiceSkeleton>
        )
   }

   if(error) {
        return (
            <ServiceSkeleton>
                <div className="text-center mt-10 text-lg">
                    {language === "kh" ? "គ្មានសេវាកម្មដែលអាចបង្ហាញបាន" : "There are no services to display"}
                </div>
            </ServiceSkeleton>
        )
   }
   
    return (
        <div>
            {data && <div className="w-full flex flex-col items-center gap-5">
                <p id={`${!isOpen && "service-box"}`} className="text-3xl text-center font-medium tablet-md:text-2xl phone-xl:text-xl">{t("pages.home.home-service.label")}</p>
                <Divider id={`${!isOpen && "service-box"}`}/>
                <p id={`${!isOpen && "service-box"}`} className="leading-10">{language === "kh" ? data[0].khmerContent : data[0].content}</p>
                <div className="grid grid-cols-2 gap-5 phone-xl:grid-cols-1">
                    {data.map((service) => (
                        <div id={`${!isOpen && "service-box"}`} className="shadow-md mt-3 px-3 py-4 flex items-start gap-3 cursor-pointer shadow-normal duration-300 hover:shadow-3d-primary tablet-lg:flex-col phone-xl:items-center" key={service.id}>
                            <img src={service.image} alt={service.title} className="h-36 p-1 duration-300 hover:scale-105"/>
                            <div className="flex flex-col gap-2 pr-2 phone-xl:items-center">
                                <p className="text-md font-semibold mb-1">{language === "kh" ? service.khmerTitle : service.title}</p>
                                <p className="text-sm leading-7">{language === "kh" ? service.khmerDescription : service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}