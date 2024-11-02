import { useTranslation } from "react-i18next"
import Divider from "../../../components/utilities/styles/divider"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"
import CourseCard from "../../../components/course/course-card"
import { useLanguageStore } from "../../../stores/language/language.store"
import { useEffect } from "react"
import gsap from "gsap"
import CourseSkeleton from "../../../components/course/course-skeleton"
import { ALL_COURSE_URL } from "../../../constants/api/course.api"
import { date } from "zod"
import { useGetAllCourseStore } from "../../../stores/api/course/course.store"

export default function CoursePage() {
    useDynamicTitle()
    const language = useLanguageStore((state) => state.language)
    const { t } = useTranslation()

    const { data, loading, error, fetchAllCourse } = useGetAllCourseStore()    

    useEffect(() => {
        gsap.from("#course-box", { duration: 1, x: -500, opacity: 0, ease: "power1.out"})
        gsap.to("#course-box", { duration: 1, x: 0, opacity: 1, ease: "power1.out" })

        gsap.from("#title-box", { duration: 1, y: 100, opacity: 0, ease: "power1.out"})
        gsap.to("#title-box", { duration: 1, y: 0, opacity: 1, ease: "power1.out" })
    })

    useEffect(() => {
        fetchAllCourse(ALL_COURSE_URL)    
    }, [fetchAllCourse])

    if (loading) {
        return (
            <CourseSkeleton>
                <div className="flex items-center gap-2 text-lg">
                    <p>{language === "kh" ? "សូមមេត្តារង់ចាំ" : "Loading"}</p>
                    <span className="loading loading-spinner loading-md"></span>
                </div>
            </CourseSkeleton>
        )
    }

    if (error) {
        return (
            <CourseSkeleton>
                <div className="text-center mt-10 text-lg">
                    {language === "kh" ? "គ្មានមេរៀនដែលអាចបង្ហាញបាន" : "There are no courses to display"}
                </div>
            </CourseSkeleton>
        )
    }

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
            {data && date.length > 0 && data.map((course) => (
                 <CourseCard
                    thumbnail={course.thumbnail}
                    title={language === "kh" ? course.khmerTitle : course.title}
                    description={language === "kh" ? course.khmerDescription : course.description}
                    price={course.price + "$"}
                    enrollOnClick={() => {}}
                />
            ))}
            </div>
        </div>
    )
}