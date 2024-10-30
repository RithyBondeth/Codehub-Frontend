import { useTranslation } from "react-i18next";
import { AnimationButton } from "../../utilities/buttons/animation";
import TextArea from "../../utilities/forms/textarea";
import Divider from "../../utilities/styles/divider";

export default function ArticleComment() {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-5">
            {/* Header Section */} 
            <div className="flex flex-col items-start gap-3 mt-10">
               <div className="w-full flex justify-between items-center">
                    <p className="text-xl">{t("pages.article.detail.comment.label")}</p>
                    <p>3 {t("pages.article.detail.comment.count")}</p>
               </div>
                <Divider/>
            </div>
            {/* Display Comment Section */}
            {[1, 2, 3].map((item) => (
                <div className="chat chat-start" key={item}>
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="userprofile" src="/src/assets/introduction/bondeth2.jpg" />
                        </div>
                    </div>
                    <div className="chat-bubble text-sm bg-gray-400 text-white">Thanks you</div>
                </div>
            ))}
            {/* Submit Comment Section */}
            <TextArea
                id="comment"
                name="comment"
                placeholder={t("pages.article.detail.comment.placeholder")}
                className="min-w-full h-36 text-sm"
                onChange={() => {}}
            />
            <div className="w-full flex justify-end">
                <AnimationButton label={t("pages.article.detail.comment.button")} className="text-sm" onClick={() => {}} />
            </div>
        </div>
    )
}