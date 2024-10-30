import { useEffect, useState } from "react"

export default function ScrollProgress() {
    const [scrollWidth, setScrollWidth] = useState<number>(0)

    const handleScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollY = window.scrollY
        const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100

        setScrollWidth(scrollPercent)
    } 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    return <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ width: `${scrollWidth}%` }}/> 
}