import { useTranslation } from "react-i18next";
import Divider from "../../../utilities/styles/divider";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function ServiceSkeleton({ children } : { children: React.ReactNode } ) {
    const { t } = useTranslation()
    
    useEffect(() => {
        gsap.from("#service-box", { duration: 1, x: 500, opacity: 0, ease: "power1.out"})
        gsap.to("#service-box", { duration: 1, x: 0, opacity: 1, ease: "power1.out" })
    }, [])
    
    return (
        <div id="service-box" className="w-full flex flex-col items-center gap-5">
            <p className="text-3xl text-center font-medium">{t("pages.home.home-service.label")}</p>
            <Divider/>
            {children}
        </div>
    )
}