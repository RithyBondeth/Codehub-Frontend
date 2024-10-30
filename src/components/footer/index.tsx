import { Link } from "react-router-dom";
import { CodeHubWhiteLogo, socialList } from "../../constants/footer/footer.constant";
import { useTranslation } from "react-i18next";
import { FooterMoreListItem } from "./type";
import { useLanguageStore } from "../../stores/language/language.store";

export default function Footer() {
    const language = useLanguageStore((state) => state.language)
    const { t } = useTranslation()
    const moreList = t("footer.more.more-list", { returnObjects: true }) as FooterMoreListItem[]
    
    return (
        <div className="flex justify-around items-start p-5 text-white bg-secondary dark:bg-dark dark:border-t-darklight border-t-2 border-transparent tablet-sm:flex-col tablet-sm:gap-10">  
            <div className="flex flex-col justify-start gap-2"> 
                <img src={CodeHubWhiteLogo} alt="CodeHub Logo" className="size-14"/>
                <p className="text-sm">CodeHub</p>
                <p className="text-sm">{language === "en" ? "Let's improve together" : "ចាប់ផ្តើមអភិវឌ្ឍទាំងអស់គ្នា"}</p>
                <a href= "mailto: rithybondeth999@gmail.com" className="text-sm font-medium">rithybondeth999@gmail.com</a>
            </div>
            <div className="text-sm flex flex-col justify-start gap-4">
                <p className="uppercase">{t("footer.more.title")} </p>
                <div className="flex flex-col gap-2">
                    {moreList.map((item) => (
                        <Link to={item.link} key={item.id}>
                            <p>{item.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="text-sm flex flex-col justify-start gap-4">  
                <p className="uppercase">{t("footer.social")}</p>
                <div className="flex justify-start items-center gap-2">
                    {socialList.map((social) => (
                        <Link to={social.link} key={social.id} target="_blank">
                            <img src={social.icon} alt="social" className="size-8 rounded-full cursor-pointer"/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )  
} 