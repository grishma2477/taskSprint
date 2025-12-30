import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PublicRoute = () => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) return <div>Loading...</div>;

    // 🚫 Only block login/register when already logged in
    if (
        isAuthenticated &&
        (location.pathname === "/login" || location.pathname === "/register")
    ) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen w-full">
            <Outlet />
        </div>
    );
};
