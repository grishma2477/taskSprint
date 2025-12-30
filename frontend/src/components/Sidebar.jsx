import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import * as userService from "../services/UserService.js"

import {
    FaTachometerAlt,
    FaTasks,
    FaCog,
    FaSignOutAlt,
    FaHeart,
    FaList,
    FaQuestion,
} from "react-icons/fa";

export const Sidebar = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        profilePicUrl: ""
    });

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        const res = await userService.getMyProfile();

        if (!res.success) {
            // toast show error failed to load data.
            return;
        }
        setUserInfo(res.data);
    }

    const { firstName, lastName, email, profilePicUrl } = userInfo
    const baseStyle =
        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all";
    const activeStyle = "bg-white text-red-500 shadow";
    const inactiveStyle = "text-white hover:bg-red-300/60";

    return (
        <div className="w-64 bg-red-400 text-white flex flex-col p-6 min-h-screen">
            {/* PROFILE SECTION */}
            <div className="flex flex-col items-center mb-8">
                <img
                    src={profilePicUrl}
                    alt={`${firstName}`}
                    className="w-20 h-20 rounded-full mb-3"
                />
                <h3 className="text-lg font-semibold">{`${firstName} ${lastName}`}</h3>
                <p className="text-sm text-red-50">{email}</p>
            </div>

            {/* NAVIGATION MENU */}
            <nav className="flex-1 space-y-2">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                    }
                >
                    <FaTachometerAlt />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/vital"
                    className={({ isActive }) =>
                        `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                    }
                >
                    <FaHeart />
                    Vital Task
                </NavLink>

                <NavLink
                    to="/mytask"
                    className={({ isActive }) =>
                        `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                    }
                >
                    <FaTasks />
                    My Task
                </NavLink>

                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                    }
                >
                    <FaList />
                    Task Categories
                </NavLink>

                <NavLink
                    to="/account"
                    className={({ isActive }) =>
                        `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                    }
                >
                    <FaCog />
                    Settings
                </NavLink>

                <NavLink
                    to="/help"
                    className={({ isActive }) =>
                        `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                    }
                >
                    <FaQuestion />
                    Help
                </NavLink>
            </nav>

            {/* LOGOUT */}
            <button className="flex items-center gap-3 mt-6 px-4 py-3 text-sm hover:text-white hover:bg-red-300/40 rounded-lg transition">
                <FaSignOutAlt /> Logout
            </button>
        </div>
    );
};
