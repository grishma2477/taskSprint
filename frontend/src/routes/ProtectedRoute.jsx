import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return null;
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    // replace meaning --> it will entirely replace the all previous navigation history so that when user click back button on browser,
    //  and the browser can navigate back but navigate to login always
    // live insta example demo
    return <div className="min-h-screen w-full">
        <Outlet />
    </div>;
};
