import { FaSearch, FaBell, FaCalendarAlt } from "react-icons/fa";

export const Navbar=()=> {
    return (
        <div className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <input
                type="text"
                placeholder="Search your task here..."
                className="px-4 py-2 border rounded-lg w-1/2"
            />
            <div className="flex gap-4 items-center">
                <FaSearch className="text-red-500 text-xl" />
                <FaBell className="text-red-500 text-xl" />
                <FaCalendarAlt className="text-red-500 text-xl" />
                <span className="text-sm text-gray-600">Tuesday<br />20/06/2023</span>
            </div>
        </div>
    );
}
