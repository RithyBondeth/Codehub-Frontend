import { useTranslation } from "react-i18next"
import Divider from "../../../components/utilities/styles/divider"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"
import CourseCard from "../../../components/course/course-card"
import { useLanguageStore } from "../../../stores/language/language.store"
import { useEffect } from "react"
import gsap from "gsap"

export default function CoursePage() {
    useDynamicTitle()
    const language = useLanguageStore((state) => state.language)
    const { t } = useTranslation()

    useEffect(() => {
        gsap.from("#course-box", { duration: 1, x: -500, opacity: 0, ease: "power1.out"})
        gsap.to("#course-box", { duration: 1, x: 0, opacity: 1, ease: "power1.out" })

        gsap.from("#title-box", { duration: 1, y: 100, opacity: 0, ease: "power1.out"})
        gsap.to("#title-box", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
    }, [])
    
    return (
        <div className="container my-10">
            {/* Label Section */}
            <div id="course-box" className="flex flex-col items-center gap-5 mb-5">
                <p id="title-box" className="text-3xl font-medium">{t("web-title.course")}</p>
                <div id="title-box" className="w-full flex items-center gap-2">
                    <p className="text-md text-nowrap">{language === "kh" ? `${t("web-title.course")}ទាំងអស់` : `All ${t("web-title.course")}s`}</p>
                    <Divider/>
                </div>
            </div>
            {/* Course Card Section */}
            <div id="course-box" className="grid grid-cols-3 gap-3 tablet-lg:grid-cols-2 tablet-sm:flex tablet-sm:flex-col tablet-sm:mx-2">
                <CourseCard
                    poster="https://miro.medium.com/v2/resize:fit:1040/0*hgtzA5jx1GpAsRZT.png"
                    title="Fundamental of Nest.js"
                    description="Learn how to build backend REST APIs with NestJs knowing as a powerful node.js framework. Including TypeORM, Postgres, Jwt ,Neon, etc."
                    price="12.99$"
                    enrollOnClick={() => {}}
                />
                <CourseCard
                    poster="https://www.webrexstudio.com/wp-content/uploads/2019/05/react-js-image.png"
                    title="React.js Full Course 2024"
                    description="Learn how to build Single Page Application with ReactJs. Including Component, Props, Hooks, Zustand, React Router, etc."
                    price="9.99$"
                    enrollOnClick={() => {}}
               />
                <CourseCard
                    poster="https://habrastorage.org/webt/um/fe/t_/umfet_kngorlggfmgokzowwtsuu.png"
                    title="Typescript Full Course 2024"
                    description="Learn all core concept of Typescript such as Type Annotation, Interface, Classes, Generics, Enum, Type Guard, Decorator, Modules, etc."
                    price="5.99$"
                    enrollOnClick={() => {}}
               />
            </div>
        </div>
    )
}