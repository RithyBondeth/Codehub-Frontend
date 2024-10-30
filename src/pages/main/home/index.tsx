import { useTranslation } from "react-i18next";
import TextTypeAnimation from "../../../components/utilities/styles/typeanimation";
import useDynamicTitle from "../../../hooks/dynamic-title.hook";
import { useEffect, useState } from "react";
import ServiceCard from "../../../components/home/service-card";
import VisionCard from "../../../components/home/vision-card";
import ContactCard from "../../../components/home/contact-card";
import TechnologyCard from "../../../components/home/technology-card";
import { ourTechnologyList } from "../../../constants/home/home.constant";
import { useSocialSignInStore } from "../../../stores/api/auth/auth.store";
import { useLocation } from "react-router-dom";

export default function HomePage() {
    useDynamicTitle()
    
    const [homeLabel,setHomeLabel] = useState<string[]>([])
    const { t, i18n } = useTranslation()

    useEffect(() => {
        setHomeLabel(t("pages.home.home-label", { returnObjects: true }) as string[])  
    }, [t, i18n.language])
    
    const { setToken } = useSocialSignInStore()
    const location = useLocation()

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const token = queryParams.get("token")

        if(token) setToken(token)
    }, [location, setToken])

    return (
        <div className="container flex flex-col items-start gap-20 my-10">
            {/* Label Section */}
            <div className="w-full flex flex-col gap-10">
                <TextTypeAnimation 
                    text={[homeLabel[0], 2000, homeLabel[1], 2000]}
                    key={homeLabel.join(",")} //Force Rerender When Component Change
                    className="font-medium" 
                />
            </div>
            {/* Our Service Section */}
            <ServiceCard/>
            {/* Our Vision Section */}
            <VisionCard/>
            {/* Technology Section */} 
            <TechnologyCard data={ourTechnologyList}/> 
            {/* Contact Us Section */}
            <ContactCard/>
        </div>
    )
}