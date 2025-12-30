import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { CategorySection } from "../components/CategorySection.jsx";
import { useNavigate } from "react-router-dom";

export const TaskCategories = () => {
    const navigate = useNavigate();

    const taskStatus = [
        { id: 1, name: "Completed" },
        { id: 2, name: "In Progress" },
        { id: 3, name: "Not Started" },
    ];

    const taskPriority = [
        { id: 1, name: "Extreme" },
        { id: 2, name: "Moderate" },
        { id: 3, name: "Low" },
    ];

    return (
        <div className="flex-1 flex flex-col">
            <Navbar />

            <main className="px-6 py-6">
                <div className="bg-white rounded-2xl shadow-md p-8 w-full md:w-[85%] ml-0 md:ml-8">

                    {/* Title Row */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">
                            Task Categories
                            <span className="block w-32 h-1 bg-red-400 mt-1 rounded-full" />
                        </h2>

                        <button
                            onClick={() => navigate(-1)}
                            className="text-sm font-semibold underline text-gray-700"
                        >
                            Go Back
                        </button>
                    </div>

                    <button
                        onClick={() => navigate("/create-category")}
                        className="bg-red-500 text-white px-5 py-2 rounded-md text-sm font-semibold mb-6"
                    >
                        Add Category
                    </button>

                    {/* Sections */}
                    <CategorySection
                        title="Task Status"
                        data={taskStatus}
                        addLabel="Add Task Status"
                    />

                    <div className="my-6"> </div>

                    <CategorySection
                        title="Task Priority"
                        data={taskPriority}
                        addLabel="Add New Priority"
                    />

                </div>
            </main>
        </div>
    );
};
