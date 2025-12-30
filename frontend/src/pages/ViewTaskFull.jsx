// src/pages/ViewTaskFull.jsx
import React from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { ViewTask } from "../components/ViewTask.jsx";

export const ViewTaskFull = () => {
    return (
        <div className="flex-1 flex flex-col">
            <Navbar />
            <div className="p-6">
                <ViewTask />
            </div>
        </div>
    );
};
