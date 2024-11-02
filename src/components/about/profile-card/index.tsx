import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import gsap from "gsap"

export default function ProfileCard() {
    const { t } = useTranslation()
    const introcardDes = t("pages.about.profile.profile-description", { returnObjects: true }) as string[]
  
    useEffect(() => {
        gsap.from("#profile-box", { duration: 1, x: -500, opacity: 0, ease: "power1.out"})
        gsap.to("#profile-box", { duration: 1, x: 0, opacity: 1, ease: "power1.out" })

        gsap.from("#description-box", { duration: 1, x: 500, opacity: 0, ease: "power1.out"})
        gsap.to("#description-box", { duration: 1, x: 0, opacity: 1, ease: "power1.out" })
    }, [])
  
    return (
        <div className="my-10 flex flex-col justify-start gap-10">
            <div className="flex justify-between items-stretch gap-5 tablet-md:flex-col tablet-md:items-center">
                <div id="profile-box" className="w-[35%] flex flex-col items-center tablet-md:w-1/2">
                    <img src="/src/assets/about/founder.png" alt="Codehub Founder" className="w-full"/>
                    <p className="mt-3 text-sm text-gray-500 tablet-md:text-center tablet-md:leading-8">{t("pages.about.profile.profile-imagelabel")}</p>
                </div>
                <div id="profile-box" className="w-[65%] leading-10 px-5 text-md text-gray-500 tablet-md:w-full">
                    {introcardDes.map((des, index) => (
                        <p key={index} className={`${index !== 0 && "mt-5"} tablet-lg:text-md`}>{des}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}