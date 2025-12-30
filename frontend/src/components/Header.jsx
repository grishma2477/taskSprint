import { useState } from "react";
import { FiSearch, FiBell, FiCalendar } from "react-icons/fi";

export const Header=()=> {
    const today = new Date();
    const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
    const date = today.toLocaleDateString("en-GB"); // dd/mm/yyyy

    const [search, setSearch] = useState("");

    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
            {/* Left section - Title */}
            <h1 className="text-3xl font-semibold">
                <span className="text-red-500">Task</span>Sprint
            </h1>

            {/* Middle - Search Bar */}
            <div className="flex items-center w-1/2 relative">
                <input
                    type="text"
                    placeholder="Search your task here..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 pl-5 pr-12 bg-slate-100 text-gray-700 rounded-xl outline-none shadow-sm"
                />
                <button className="absolute right-3 bg-red-400 text-white p-2 rounded-lg hover:bg-red-500">
                    <FiSearch size={18} />
                </button>
            </div>

            {/* Right section - Icons & Date */}
            <div className="flex items-center gap-4">
                <button className="bg-red-400 p-2 rounded-lg text-white hover:bg-red-500">
                    <FiBell size={18} />
                </button>

                <button className="bg-red-400 p-2 rounded-lg text-white hover:bg-red-500">
                    <FiCalendar size={18} />
                </button>

                <div className="text-right">
                    <p className="font-medium">{weekday}</p>
                    <p className="text-blue-500 text-sm">{date}</p>
                </div>
            </div>
        </header>
    );
}

