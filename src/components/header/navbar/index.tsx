import { codeHubLogoPng, englishFlagLogo, khmerFlagLogo } from "../../../constants/header/header.constant";
import Drawer from "../drawer";
import { useLanguageStore } from "../../../stores/language/language.store";
import i18n from "../../../languages/i18n";
import { useTranslation } from "react-i18next";
import { NavbarItemType } from "./type";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimationButton } from "../../utilities/buttons/animation";
import ProfileCard from "../profile-card";
import ThemeSwitcher from "../theme-switcher";
import { useAuthenticationStore, useCurrentUserStore, useSignInStore, useSocialSignInStore } from "../../../stores/api/auth/auth.store";
import { useEffect } from "react";
import { GET_CURRENT_USER_URL } from "../../../constants/api/auth.api";

export default function Navbar() {
    const { language, setLanguage } = useLanguageStore()
    const changeLanguage = (lang: string) => {
        setLanguage(lang)
        i18n.changeLanguage(lang)
    }

    const { t } = useTranslation()
    const navbarItems = t("navbar", { returnObjects: true }) as NavbarItemType

    const location = useLocation()
    const navigate = useNavigate()
    const isAuth = useAuthenticationStore((state) => state.isAuth)
    
    //Get the current user
    const emailToken = useSignInStore((state) => state.token)
    const socialToken = useSocialSignInStore((state) => state.token)
    
    const currentUser = useCurrentUserStore((state) => state.data)
    const fetchCurrentUser = useCurrentUserStore((state) => state.fetchCurrentUser)

    useEffect(() => {  
       if(emailToken && !socialToken) {
            fetchCurrentUser(GET_CURRENT_USER_URL, emailToken as string)
       }

       if(socialToken && !emailToken) {
         fetchCurrentUser(GET_CURRENT_USER_URL, socialToken as string)
       }
    }, [emailToken, fetchCurrentUser, socialToken])

    return (
        <nav className="shadow-lg flex justify-between items-center px-3 sticky top-0 z-10 bg-white dark:bg-dark">
            {/* Logo Section */}
            <Link to="/" className="flex items-center">
                <img src={codeHubLogoPng} alt="Codehub" className="h-12 tablet-md:py-2"/> 
                <p className="text-xl font-bold phone-lg:hidden">CodeHub</p>
            </Link>
            {/* Menu Link Section */}
            <div className="flex justify-center items-center text-primary tablet-sm:hidden">
                {navbarItems.map((item) => (
                    <Link to={item.link} key={item.id} className="mx-1 px-2 py-5 group tablet-md:px-1">
                        <p className="text-sm tablet-md:text-xs">{item.label}</p>
                        <div className={`w-0 ${location.pathname === item.link && "w-full"} h-1 duration-200 bg-primary group-hover:w-full`}/>
                    </Link>
                ))}
            </div>
            {/* ToggleTheme and Languages Section */}
            <div className="flex justify-between items-center">
                <ThemeSwitcher/>
                {language === "en" && 
                    <img src={khmerFlagLogo} alt="languages" className="cursor-pointer h-8 mx-5" onClick={() => changeLanguage("kh")}/>}
                {language === "kh" && 
                    <img  src={englishFlagLogo} alt="languages" className="cursor-pointer h-8 mx-5" onClick={() => changeLanguage("en")}/>}
                {/* Auth Check Section */}
                {isAuth ? <ProfileCard name={currentUser && currentUser.username} avatar={currentUser && currentUser.avatar}/> : <AnimationButton label={language === "en" ? "Login" : "ចុះឈ្មោះ"} className="text-xs text-nowrap" onClick={() => navigate("/signin")}/>}
                {/* Drawer Section */} 
                <Drawer className="hidden tablet-sm:block tablet-sm:ml-3" navbarItems={navbarItems}/>
            </div>
        </nav>
    )   
}