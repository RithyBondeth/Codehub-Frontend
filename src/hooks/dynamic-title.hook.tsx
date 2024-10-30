import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";

export default function useDynamicTitle() {
    const location = useLocation()
    const { id } = useParams()
    const { t } = useTranslation()

    useEffect(() => {
        switch(location.pathname) {
            case "/": 
                document.title = `Codehub | ${t("web-title.home")}`
                break
            case "/about":
                document.title = `Codehub | ${t("web-title.about")}`
                break
            case "/article": 
            case `/article/${id}`: 
                document.title = `Codehub | ${t("web-title.article")}`
                break
            case "/course":
                document.title = `Codehub | ${t("web-title.course")}`
                break
            case "/work":
            case `/work/${id}`:
                document.title = `Codehub | ${t("web-title.work")}`
                break
            case "/contact":
                document.title = `Codehub | ${t("web-title.contact")}`
                break
            case "/term-and-condition":
                document.title = `Codehub | ${t("web-title.term-and-condition")}`
                break
            case "/privacy":
                document.title = `Codehub | ${t("web-title.privacy")}`
                break
            case "/signin":
                document.title = `Codehub | ${t("web-title.signin")}`
                break
            case "/signup":
                document.title = `Codehub | ${t("web-title.signup")}`
                break
            default: 
                document.title = "Codehub"
        }
    }, [id, location, t])
}
