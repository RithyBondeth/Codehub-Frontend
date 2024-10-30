import { useTranslation } from "react-i18next";
import { useThemeStore } from "../../../stores/theme/theme.store";

export default function ThemeCard() {
    const { t } = useTranslation()
    const { theme, setTheme } = useThemeStore()

    return (
        <div className="w-full flex flex-col items-start gap-5">
            <div className="flex flex-col gap-2">
                <p className="text-2xl font-medium">{t("pages.profile.change-theme.label")}</p>
                <p className="text-sm">{t("pages.profile.change-theme.description")}</p>
            </div>
            <div className="w-full">
                <table className="table">
                    <tbody>
                    {/* Current Password Section */}
                    <tr className="flex">
                        <th className="w-1/3 flex items-center gap-1 text-nowrap">
                            <span className="material-symbols-outlined">contrast</span>
                            <p>{t("pages.profile.change-theme.form.label")}</p>
                        </th>
                        <td className="w-2/3">
                            <details className="dropdown">
                                <summary className="btn m-1">{theme === "light" ? t("pages.profile.change-theme.form.light") : t("pages.profile.change-theme.form.dark")}</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li onClick={() => setTheme("light")}> 
                                        <a>{t("pages.profile.change-theme.form.light")}</a>        
                                    </li>
                                    <li onClick={() => setTheme("dark")}>
                                        <a>{t("pages.profile.change-theme.form.dark")}</a>
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