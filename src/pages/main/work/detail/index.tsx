import { useTranslation } from "react-i18next";
import Divider from "../../../../components/utilities/styles/divider";
import useDynamicTitle from "../../../../hooks/dynamic-title.hook";
import { workData } from "./data";

export default function WorkDetailPage() {
    useDynamicTitle()
    const { t } = useTranslation()

    return (
        <div className="container my-16">
             {/* Header Label Section */}
             <div className="flex flex-col items-start gap-5">
                <p className="text-3xl">Visioncare AI and Doctor Appointment</p>
                <div className="w-full">
                    <div className="w-full flex justify-between items-center mb-1 text-sm text-gray-500 phone-xl:flex-col phone-xl:items-start phone-xl:gap-2">
                        <p>{t("pages.work.detail.date")} - 10 Jan 2024</p>
                        <p>{t("pages.work.detail.author")} - Rithy Bondeth</p>
                    </div>
                    <Divider/>
                </div>
            </div>
            {/* Share Work */}
            {/* Article Paragraph Section */}
            <div className="flex flex-col gap-3">
                {workData.paragraphs.map((item) => (
                     <div className="flex flex-col gap-5 mt-5 leading-10">
                     <p className="text-2xl">{item.title}</p>
                     <p>{item.descriptionEnglish}</p>
                 </div>
                ))}
            </div>
        </div>
    )  
}