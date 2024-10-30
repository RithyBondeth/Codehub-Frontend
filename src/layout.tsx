import { Outlet } from "react-router-dom";
import Navbar from "./components/header/navbar";
import ScrollProgress from "./components/utilities/styles/scrollprogress";
import Footer from "./components/footer";
import { useThemeStore } from "./stores/theme/theme.store";
import { useEffect } from "react";

export default function Layout() {
  const { theme } = useThemeStore() 

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <div>  
        <ScrollProgress/>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
