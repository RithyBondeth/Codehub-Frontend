import { ReactNode } from "react";
import Divider from "../../../utilities/styles/divider";
import { useTranslation } from "react-i18next";

export default function VisionSkeleton({ children } : { children: ReactNode}) {
    const { t } = useTranslation()

    return (
        <div className="w-full flex flex-col gap-5">
            <p className="text-3xl text-center font-medium tablet-md:text-2xl phone-xl:text-xl">{t("pages.home.home-vision.label")}</p>
            <Divider/>
            {children}
        </div>
    )
}