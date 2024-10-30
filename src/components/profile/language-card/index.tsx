import { useTranslation } from "react-i18next";
import i18n from "../../../languages/i18n";
import { useLanguageStore } from "../../../stores/language/language.store";


export default function LanguageCard() {
    const { t } = useTranslation()
    const { language, setLanguage } = useLanguageStore()

    const handleChangeLanguage = (lang: "en" | "kh") => {
        setLanguage(lang)
        i18n.changeLanguage(lang)
    }

    return (
        <div className="w-full flex flex-col items-start gap-5">
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-medium">{t("pages.profile.change-language.label")}</p>
                <p className="text-sm">{t("pages.profile.change-language.description")}</p>
            </div>
            <div className="w-full">
                <table className="table">
                    <tbody>
                    {/* Current Password Section */}
                    <tr className="flex">
                        <th className="w-1/3 flex items-center gap-1 text-nowrap">
                            <span className="material-symbols-outlined">language</span>
                            <p>{t("pages.profile.change-language.form.label")}</p>
                        </th>
                        <td className="w-2/3">
                            <details className="dropdown">
                                <summary className="btn m-1">{language === "kh" ? t("pages.profile.change-language.form.khmer") : t("pages.profile.change-language.form.english")}</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li onClick={() => handleChangeLanguage("kh")}> 
                                        <a>{t("pages.profile.change-language.form.khmer")}</a>        
                                    </li>
                                    <li onClick={() => handleChangeLanguage("en")}>
                                        <a>{t("pages.profile.change-language.form.english")}</a>
                                    </li>
                                </ul>
                            </details>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )   
}