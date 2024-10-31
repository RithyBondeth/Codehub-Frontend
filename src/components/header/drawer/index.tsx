import { Link } from "react-router-dom";
import { DrawerProps } from "./type";

export default function Drawer(props: DrawerProps) {
    return (
        <div className={`drawer drawer-end ${props.className}`}>
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="material-symbols-outlined rounded-sm p-1 mt-1 text-primary">menu</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="relative menu bg-white dark:bg-dark text-primary min-h-full w-60 p-4 [&>li]:mt-5">
                    {/* Sidebar content here */}
                    {props.navbarItems.map((item) => (
                        <li key={item.id}>
                            <Link to={item.link} replace>{item.label}</Link>
                        </li>
                    ))}
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