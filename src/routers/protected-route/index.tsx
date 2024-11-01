import { ReactNode } from "react";
import { useAuthenticationStore, useSignInStore, useSocialSignInStore } from "../../stores/api/auth/auth.store";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children } : { children: ReactNode }) {
    const isAuth = useAuthenticationStore((state) => state.isAuth)
    const emailToken = useSignInStore((state) => state.token)
    const socailToken = useSocialSignInStore((state) => state.token)

    const location = useLocation()

    if(!isAuth && (!socailToken || !emailToken) && (location.pathname === "/profile")) {
        return <Navigate to="/signin" replace/>
    }

    return children
}