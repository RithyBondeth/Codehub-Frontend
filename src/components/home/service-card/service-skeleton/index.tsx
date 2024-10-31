import { useTranslation } from "react-i18next";
import Divider from "../../../utilities/styles/divider";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useDrawerStore } from "../../../../stores/drawer/drawer.store";

export default function ServiceSkeleton({ children } : { children: React.ReactNode } ) {
    const { t } = useTranslation()
    const isOpen = useDrawerStore((state) => state.isOpen)
    
    useEffect(() => {
        gsap.from("#service-box", { duration: 1, x: 500, opacity: 0, ease: "power1.out"})
        gsap.to("#service-box", { duration: 1, x: 0, opacity: 1, ease: "power1.out" })
    }, [])
    
    return (
        <div id={`${!isOpen && "service-box"}`} className="w-full flex flex-col items-center gap-5">
            <p className="text-3xl text-center font-medium tablet-md:text-2xl phone-xl:text-xl">{t("pages.home.home-service.label")}</p>
            <Divider/>
            {children}
        </div>
    )
}