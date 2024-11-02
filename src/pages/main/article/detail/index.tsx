import { useTranslation } from "react-i18next";
import Divider from "../../../../components/utilities/styles/divider";
import useDynamicTitle from "../../../../hooks/dynamic-title.hook";
import { useEffect } from "react";
import { useSingleArtileStore } from "../../../../stores/api/article/article.store";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useParams } from "react-router-dom";
import { useLanguageStore } from "../../../../stores/language/language.store";
import { dateFormatter } from "../../../../util/date-format.util";
import TextArea from "../../../../components/utilities/forms/textarea";
import { AnimationButton } from "../../../../components/utilities/buttons/animation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommentFormFields, schemaValidation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthenticationStore, useSignInStore, useSocialSignInStore } from "../../../../stores/api/auth/auth.store";
import { useCountCommentStore, useGetAllCommentStore, usePostCommentStore } from "../../../../stores/api/comment/comment.store";
import { COUNT_COMMENTS_URL, GET_ALL_COMMENTS_URL, POST_COMMENT_URL } from "../../../../constants/api/comment.api";
import { commentDateFormatter } from "../../../../util/commentdate-format.util";
import { toast } from "react-toastify";
import { useThemeStore } from "../../../../stores/theme/theme.store";

export default function ArticleDetailPage() {
    useDynamicTitle()

    const { t } = useTranslation()
    const language = useLanguageStore((state) => state.language)
    const theme = useThemeStore((state) => state.theme)
    const { data, loading, error, fetchSingleData } = useSingleArtileStore()
    const { articleId } = useParams()

    const isAuth = useAuthenticationStore((state) => state.isAuth)
    const emailToken = useSignInStore((state) => state.token)
    const socialToken = useSocialSignInStore((state) => state.token)

    //Comment Store
    const commentLoading = usePostCommentStore((state) => state.loading)
    const postComment = usePostCommentStore((state) => state.postComment)
    const comments = useGetAllCommentStore((state) => state.data)
    const fetchComments = useGetAllCommentStore((state) => state.fetchComments)
    const fetchCountComments = useCountCommentStore((state) => state.fetchCountComment)
    const countComments = useCountCommentStore((state) => state.data)

    const { register, handleSubmit, formState, reset } = useForm<CommentFormFields>({ resolver: zodResolver(schemaValidation) })
    
    const onSubmit: SubmitHandler<CommentFormFields> = async (data) => {
        if(isAuth) {
            if(emailToken) {
                await postComment(POST_COMMENT_URL, emailToken as string, data.comment, articleId as string)
                reset()
                window.location.reload()
            }
            if(socialToken) {
                await postComment(POST_COMMENT_URL, socialToken as string, data.comment, articleId as string)
                reset()
                window.location.reload()
            }
        } else  {
            toast.error(`${language === "kh" ? "អ្នកត្រូវតែចុះឈ្មោះជាមុនសិន។" : "You must log in first."}`, { theme: `${theme === "dark" ? "dark" : "light"}` })
        }
    }

    useEffect(() => {
      fetchSingleData(articleId as string)
      fetchComments(GET_ALL_COMMENTS_URL(articleId as string))
      fetchCountComments(COUNT_COMMENTS_URL(articleId as string))

    },[articleId, fetchSingleData, fetchComments, fetchCountComments, postComment])

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
                {/* Comment Section */}
                <div className="flex flex-col gap-5">
                {/* Header Section */} 
                <div className="flex flex-col items-start gap-3 mt-10">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-xl">{t("pages.article.detail.comment.label")}</p>
                        <p>{countComments} {t("pages.article.detail.comment.count")}</p>
                    </div>
                        <Divider/>
                    </div>
                    {/* Display Comment Section */}
                    {comments && comments.length > 0 && comments.map((comment, index) => (
                        <div className="chat chat-start" key={index}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="userprofile" src={comment.user.avatar} />
                                </div>
                            </div>
                            <div className="chat-bubble text-sm dark:bg-darklight bg-gray-100 text-black">{comment.content}</div>
                            <p className="text-[10px] text-gray-500 mt-1">{commentDateFormatter(comment.createdAt)}</p>
                        </div>
                    ))}
                    {countComments === 0 && <div className="w-full flex justify-center items-center">
                        <p>{t("pages.article.detail.comment.no-content")}</p>
                    </div>}
                    {/* Submit Comment Section */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <TextArea
                                id="comment"
                                placeholder={t("pages.article.detail.comment.placeholder")}
                                className="min-w-full h-36 text-sm"
                                {...register("comment")}
                            />
                            {formState.errors.comment && <div className="">
                                <p className="text-red-500 text-xs">{formState.errors.comment.message}</p>
                            </div>}
                        </div>
                        <div className="w-full flex justify-end mt-2">
                            <AnimationButton 
                                type="submit" 
                                label={commentLoading ? `${language === "kh" ? "សូមមេត្តារង់ចាំ" : "Loading..."}` : t("pages.article.detail.comment.button")} 
                                className="text-sm"
                            />
                        </div>
                    </form>
                </div>
            </div>}
        </div>
    )
}