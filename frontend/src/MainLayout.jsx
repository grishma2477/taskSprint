import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    const auth = useAuth();
    return (
        <>
            {auth.isAuthenticated && <Header />}
            <div className="flex min-h-screen bg-gray-100">
                {auth.isAuthenticated && <Sidebar />}
                <div className="flex-1 flex">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};