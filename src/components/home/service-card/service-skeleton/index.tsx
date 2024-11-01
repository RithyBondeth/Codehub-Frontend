import { useTranslation } from "react-i18next";
import Divider from "../../../utilities/styles/divider";
import React from "react";

export default function ServiceSkeleton({ children } : { children: React.ReactNode } ) {
    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col items-center gap-5">
            <p className="text-3xl text-center font-medium tablet-md:text-2xl phone-xl:text-xl">{t("pages.home.home-service.label")}</p>
            <Divider/>
            {children}
        </div>
    )
}