import { useEffect, useState } from "react";
import PersonalCard from "../../../components/profile/personal-card";
import ThemeCard from "../../../components/profile/theme-card";
import LanguageCard from "../../../components/profile/language-card";
import LgoutCard from "../../../components/profile/logout-card";
import ChangePasswordCard from "../../../components/profile/changepassword-card";
import { useTranslation } from "react-i18next";
import { SideBarItems } from "./type";
import gsap from "gsap";
import { useSignInStore } from "../../../stores/api/auth/auth.store";

export default function ProfilePage() {
    const { t } = useTranslation()
    const sidebarItems = t('pages.profile.sidebar.items', { returnObjects: true }) as SideBarItems[]
    const [route, setRoute] = useState(sidebarItems[0].link)

    useEffect(() => {
        gsap.from("#sidebar-box", { duration: 0.8, x: -400, opacity: 0, ease: "power1.out"})
        gsap.to("#sidebar-box", { duration: 0.8, x: 0, opacity: 1, ease: "power1.out" })

        gsap.from("#section-box", { duration: 0.8, x: 400, opacity: 0, ease: "power1.out"})
        gsap.to("#section-box", { duration: 0.8, x: 0, opacity: 1, ease: "power1.out" })
    })

    const { token } = useSignInStore()  

    return (
        <div className="container h-[750px] my-10 tablet-lg:h-[1150px] tablet-lg:px-10 tablet-md:min-h-[1250px]">
            <div className="w-full h-[400px] flex justify-between items-stretch gap-10 tablet-lg:flex-col tablet-lg:[&>div]:w-full">
                <div id="sidebar-box" className="w-1/3 flex flex-col justify-start items-start gap-5">
                    <p className="text-2xl font-bold">{t("pages.profile.sidebar.label")}</p>
                    <p>{token}</p>
                    <div className="w-full flex flex-col">
                        {sidebarItems.map((item, index) => (
                            <div 
                                className={`w-full flex justify-start items-center gap-1 pl-0 p-5 cursor-pointer
                                            ${index === sidebarItems.length-1 ? "border-y-2" : "border-t-2"} border-t-gray-200
                                          hover:bg-gray-200 hover:pl-5 duration-300 ${route === item.link && "pl-5 bg-gray-200 dark:bg-gray-600"} dark:hover:bg-gray-600`} 
                                onClick={() => setRoute(item.link)}
                                key={item.id}
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="section-box" className="w-2/3 flex flex-col justify-start items-start gap-5">
                    {route ===  "personal" && <PersonalCard/>}
                    {route === "change_password" && <ChangePasswordCard/>}
                    {route === "theme" && <ThemeCard/>}
                    {route === "language" && <LanguageCard/>}
                    {route === "logout" && <LgoutCard/>}
                </div>
            </div>
        </div>
    )
}