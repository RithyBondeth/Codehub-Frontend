import { useTranslation } from "react-i18next"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"
import SmallArticleCard from "../../../components/article/article-card"
import Divider from "../../../components/utilities/styles/divider"
import { useNavigate } from "react-router-dom"
import { useLanguageStore } from "../../../stores/language/language.store"
import { useEffect } from "react"
import { useArticleStore } from "../../../stores/api/article/article.store"
import { ALL_ARTICLE_URL } from "../../../constants/api/article.api"
import ArticleSkeleton from "../../../components/article/article-skeleton"
import gsap from "gsap"

export default function ArticlePage() {
    useDynamicTitle()
    const language = useLanguageStore((state) => state.language)
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { data, error, loading, fetchData } = useArticleStore()

    useEffect(() => {
        const controller = new AbortController()
        fetchData(ALL_ARTICLE_URL)
        
        return () => controller.abort()
    },[fetchData])

    useEffect(() => {
        gsap.from("#article-box", { duration: 1, x: -500, opacity: 0, ease: "power1.out"})
        gsap.to("#article-box", { duration: 1, x: 0, opacity: 1 })

        gsap.from("#title-box", { duration: 1, y: 100, opacity: 0, ease: "power1.out"})
        gsap.to("#title-box", { duration: 1, y: 0, opacity: 1 })
    })
    
    if (loading) {
        return (
            <ArticleSkeleton>
                <div className="flex items-center gap-2 text-lg">
                    <p>{language === "kh" ? "សូមមេត្តារង់ចាំ" : "Loading"}</p>
                    <span className="loading loading-spinner loading-md"></span>
                </div>
            </ArticleSkeleton>
        )
    }

    if (error) {
        return (
            <ArticleSkeleton>
                <div className="text-center mt-10 text-lg">
                    {language === "kh" ? "គ្មានអត្ថបទដែលអាចបង្ហាញបាន" : "There are no articles to display"}
                </div>
            </ArticleSkeleton>
        )
    }

    return (
        <div className="container my-10">
            {/* Label Section */}
            <div id="article-box" className="flex flex-col items-center gap-5 mb-5">
                <p className="text-3xl font-medium">{t("web-title.article")}</p>
                <div className="w-full flex items-center gap-2">
                    <p className="text-md text-nowrap">{language === "kh" ? `${t("web-title.article")}ទាំងអស់` : `All ${t("web-title.article")}s`}</p>
                    <Divider/>
                </div>
            </div>
            {/* ArticleCard List Section */}
            <div id="article-box" className="w-full flex flex-col items-center gap-5">
                {data && data.map((article) => (
                    <SmallArticleCard 
                        title={language === "kh" ? article.khmerTitle : article.title}
                        description={article.description}
                        poster={article.thumbnail}
                        button={{ label: t("pages.article.readmore-button"), onClick: () => navigate(`/article/${article.id}`) }}
                    />
               ))}
            </div>
        </div>
    )   
}