import { useTranslation } from "react-i18next";
import Divider from "../../utilities/styles/divider";
import { TechCardProps } from "./type";

export default function TechnologyCard(props: TechCardProps) {
    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col gap-5">
            <p className="text-3xl text-center font-medium">{t("pages.home.home-technology.label")}</p> 
            <Divider/>
            <div className="grid grid-cols-4 place-items-stretch gap-1 tablet-md:grid-cols-3 tablet-sm:grid-cols-2">
            {props.data.map((item) => (
                <div key={item.id} className={`h-32 bg-gray-100 dark:bg-dark flex justify-center items-center`}>
                    <img src={item.icon} alt={item.title} className={`h-full grayscale hover:grayscale-0 ${item.fixImage && 'p-8'}`}/>
                </div>
            ))}
            </div>
        </div>
    )
}