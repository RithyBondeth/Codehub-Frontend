import { useTranslation } from "react-i18next";
import Divider from "../../../../components/utilities/styles/divider";
import { ShareArticleItems } from "./type";
import ArticleComment from "../../../../components/article/article-comment";
import useDynamicTitle from "../../../../hooks/dynamic-title.hook";
import { useEffect } from "react";
import { useSingleArtileStore } from "../../../../stores/api/article/article.store";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useParams } from "react-router-dom";
import { useLanguageStore } from "../../../../stores/language/language.store";
import { dateFormatter } from "../../../../util/date-format.util";

export default function ArticleDetailPage() {
    useDynamicTitle()
    const { t } = useTranslation()
    const language = useLanguageStore((state) => state.language)
    const { data, loading, error, fetchSingleData } = useSingleArtileStore()
    const { articleId } = useParams()
    const shareArticles = t("pages.article.detail.share-article", { returnObjects: true }) as ShareArticleItems[]

    useEffect(() => {
      fetchSingleData(articleId as string)
    },[articleId, fetchSingleData])

    if(loading) {
        return ( 
           <div className="container my-20">
                <div className="flex justify-center items-center gap-2 text-lg">
                    <p>{language === "kh" ? "សូមមេត្តារង់ចាំ" : "Loading"}</p>
                    <span className="loading loading-spinner loading-md"></span>
                </div>
           </div>
        )   
    }

    if(error) {
        return ( 
           <div className="container my-20">
                <div className="flex justify-center items-center text-lg">
                    <p>{language === "kh" ? "គ្មានអត្ថបទដែលអាចបង្ហាញបាន" : "There are no articles to display"}</p>
                </div>
           </div>
        )   
    }

    return (
        <div>
            {data && <div className="container my-16">
                {/* Header Label Section */}
                <div className="flex flex-col items-start gap-5">
                    <p className="text-3xl font-medium">{language === "kh" ? data.khmerTitle : data.title}</p>
                    <div className="w-full">
                        <div className="w-full flex justify-between items-center mb-1 text-sm text-gray-500 phone-xl:flex-col phone-xl:items-start phone-xl:gap-2">
                            <p>{t("pages.article.detail.date")} - {dateFormatter(data.createdAt)}</p>
                            <p>{t("pages.article.detail.author")} - {data.author}</p>
                        </div>
                        <Divider/>
                    </div>
                </div>
                {/* Poster Section */}
                <div 
                    className="h-[500px] w-full my-5 phone-lg:max-h-44 tablet-sm:h-64 bg-center bg-cover bg-no-repeat" 
                    style={{backgroundImage: `url(${data.poster})`}}
                />
                {/* Content Section */}
                <ReactMarkdown 
                    children={data?.content} 
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h1: ({ ...props }) => <h2 className="text-3xl font-medium my-5" {...props} />,
                        h2: ({ ...props }) => <h2 className="text-2xl font-medium my-5" {...props} />,
                        h3: ({ ...props }) => <h3 className="text-xl font-medium my-5" {...props} />,
                        p: ({ ...props }) => <p className="leading-10 text-start" {...props} />,
                        li: ({ ...props }) => <li className="my-3 ml-10 leading-8 list-disc" {...props} />,
                        table: ({ ...props }) => <table className="my-8" {...props} />,
                        th: ({ ...props }) => <th className="border-2 p-3 text-start font-medium text-sm" {...props} />,
                        td: ({ ...props }) => <td className="border-2 p-3 text-sm" {...props} />,
                    }}
                />
                {/* Share Article Section */}
                <div className="w-full flex items-center justify-end gap-2 mt-10">
                    <p className="text-sm">{t("pages.article.detail.share-article-button")}</p>
                    <div className="flex items-center gap-2 duration-200">
                        {shareArticles.map((item) => (
                            <img key={item.id} src={item.icon} alt="social" className="h-7 cursor-pointer duration-200 hover:scale-110 dark:invert"/>  
                        ))}
                    </div>
                </div>
                {/* Comment Section */}
                <ArticleComment/>
            </div>}
        </div>
    )
}