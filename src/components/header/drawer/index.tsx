import { useNavigate } from "react-router-dom";
import { DrawerProps } from "./type";
import { useDrawerStore } from "../../../stores/drawer/drawer.store";
import { useThemeStore } from "../../../stores/theme/theme.store";
import { useLanguageStore } from "../../../stores/language/language.store";

export default function Drawer(props: DrawerProps) {

    const naviagte = useNavigate()
    const {isOpen, setIsOpen} = useDrawerStore()

    const { theme, toggleTheme } = useThemeStore()
    const language = useLanguageStore((state) => state.language)
    
    return (
        <div className={`drawer drawer-end ${props.className}`}>
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" onChange={(e) => setIsOpen(e.target.checked)} checked={isOpen}/>
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="material-symbols-outlined rounded-sm p-1 mt-1 text-primary">menu</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="relative menu bg-white dark:bg-dark min-h-full w-60 p-4 [&>li]:mt-5">
                    {/* Sidebar content here */}
                    {props.navbarItems.map((item) => (
                        <li key={item.id}>
                            <div 
                                onClick={() => {
                                    naviagte(item.link)
                                    setIsOpen(false)
                                }}
                                className="font-semibold flex items-center gap-2"
                            >
                                <p className="material-symbols-outlined">{item.icon}</p>
                                <p>{item.label}</p>
                            </div>
                        </li>
                    ))}
                    <li>
                        <div className="flex items-center gap-2" onClick={toggleTheme}>
                            <p className="material-symbols-outlined">{theme === "light" ? "dark_mode" : "light_mode"}</p>
                            <p>{theme === "light" ? language === "kh" ? "ផ្ទៃងងឹត" : "Dark Theme" : language === "kh" ? "ផ្ទៃភ្លឺ" : "Light Theme"}</p>
                        </div>
                    </li>
                    {/* Close Button */}
                    <label  
                        htmlFor="my-drawer-4" aria-label="close sidebar" 
                        className="material-symbols-outlined absolute top-3 right-4 p-1 rounded-full cursor-pointer bg-primary text-white"
                    >
                        close
                    </label>
                </div>
            </div>
        </div>
    )   
}