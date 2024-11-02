import { Outlet } from "react-router-dom";
import Navbar from "./components/header/navbar";
import ScrollProgress from "./components/utilities/styles/scrollprogress";
import Footer from "./components/footer";
import { useThemeStore } from "./stores/theme/theme.store";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer/>
        <Footer/>
    </div>
  )
}
