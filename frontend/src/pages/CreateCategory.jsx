import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";

export const CreateCategory = () => {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState("");

    return (
        <div className="px-6 py-6">
            <div className="bg-white rounded-2xl shadow-md p-8 w-full md:w-[85%] ml-0 md:ml-8">
                {/* Header Row */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        Create Categories
                        <span className="block w-36 h-1 bg-red-400 mt-1 rounded-full" />
                    </h2>

                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm font-semibold underline text-gray-700"
                    >
                        Go Back
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700">
                            Category Name
                        </label>
                        <input
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="mt-1 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                            placeholder="Enter category name..."
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 font-semibold"
                        >
                            Create
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="px-6 py-2 bg-gray-300 text-sm rounded-md font-semibold"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
