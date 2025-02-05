import React, { useEffect } from "react"
import Divider from "../../utilities/styles/divider"
import { useLanguageStore } from "../../../stores/language/language.store"
import { useTranslation } from "react-i18next"
import gsap from "gsap"

export default function ArticleSkeleton({ children } : { children: React.ReactNode }) {
    const { language } = useLanguageStore()
    const { t } = useTranslation()
    
    useEffect(() => {
        gsap.from("#article-box", { duration: 1, x: -500, opacity: 0, ease: "power1.out"})
        gsap.to("#article-box", { duration: 1, x: 0, opacity: 1})

        gsap.from("#title-box", { duration: 1, y: 100, opacity: 0, ease: "power1.out"})
        gsap.to("#title-box", { duration: 1, y: 0, opacity: 1 })
    }, [])
    
    return  (
        <div className="container my-10 flex justify-center items-center">
            <div id="article-box" className="w-full flex flex-col items-center gap-5 mb-5">
                <p id="title-box" className="text-3xl font-medium">{t("web-title.article")}</p>
                <div id="title-box" className="w-full flex items-center gap-2">
                    <p className="text-md text-nowrap">{language === "kh" ? `${t("web-title.article")}ទាំងអស់` : `All ${t("web-title.article")}s`}</p>
                    <Divider/>
                </div>
                {children}
            </div>
        </div>
    )
}