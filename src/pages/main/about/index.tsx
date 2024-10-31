import { useTranslation } from "react-i18next"
import Divider from "../../../components/utilities/styles/divider"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"
import ProfileCard from "../../../components/about/profile-card"
import BackgroundCard from "../../../components/about/background-card"
import ContactCard from "../../../components/home/contact-card"
import { useEffect } from "react"
import gsap from "gsap"
import { useDrawerStore } from "../../../stores/drawer/drawer.store"

export default function AboutPage() {
    useDynamicTitle()
    const isOpen = useDrawerStore((state) => state.isOpen)
    const { t } = useTranslation()

    useEffect(() => {
        gsap.from("#about-box", { duration: 1, y: 200, opacity: 0, ease: "power1.out"})
        gsap.to("#about-box", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
    })

    return (
        <div className="container my-10">
            {/* Label Section */}
            <div className="flex flex-col items-center gap-5 mb-5">
                <p id={`${!isOpen} && "about-box"`} className="text-3xl font-medium">{t("web-title.about")}</p>
                <Divider id={`${!isOpen} && "about-box"`}/>
                {/* Profile Section */}
                <ProfileCard/>
                {/* Background Section */} 
                <BackgroundCard/>    
                {/* Contact Section */}
                <ContactCard/>
            </div> 
        </div>
    )
}