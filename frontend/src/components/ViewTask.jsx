// src/components/ViewTask.jsx
import React from "react";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { UpdateTaskDialog } from "./UpdateTaskDialog";

const STATUS_OPTIONS = ["Not Started", "In Progress", "Completed"];
const PRIORITY_OPTIONS = ["Low", "Moderate", "High", "Extreme"];

export const ViewTask = () => {

    const [showStatusDialog, setShowStatusDialog] = useState(false);
    const [showPriorityDialog, setShowPriorityDialog] = useState(false);
    return (
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">

            {/* Top row: title + Go Back */}
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold">
                    Attend Nischal’s Birthday Party
                </h2>
                <button className="underline text-sm font-medium">Go Back</button>
            </div>

            {/* Card area */}
            <div className="relative bg-[#f8fafc] rounded-2xl border border-gray-200 p-6">

                {/* Edit Button inside card box */}
                <button className="absolute top-4 right-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    <FaEdit />
                </button>

                <div className="flex gap-6 items-start">
                    <img
                        src="https://via.placeholder.com/140"
                        alt="task"
                        className="w-40 h-32 rounded-xl object-cover"
                    />
                    <div>
                        <h3 className="text-xl font-semibold mb-1">
                            Attend Nischal’s Birthday Party
                        </h3>

                        <p className="text-sm">
                            <span className="font-semibold">Priority: </span>
                            <span className="text-blue-600 font-medium">Moderate</span>
                        </p>

                        <p className="text-sm mt-1">
                            <span className="font-semibold">Status: </span>
                            <span className="text-red-600 font-medium">Not Started</span>
                        </p>

                        <p className="text-sm mt-1 text-gray-500">
                            Created on: 20/06/2023
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6 text-gray-700 leading-relaxed">
                    Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
                    Elements)
                    <br /><br />
                    1. A cake, with candles to blow out.
                    <br />
                    2. The birthday song.
                    <br />
                    3. A place to collect gifts.
                </div>

                {/* Optional list */}
                <div className="mt-6">
                    <h4 className="font-semibold mb-2">Optional:</h4>
                    <ul className="list-disc ml-6 space-y-1 text-gray-700">
                        <li>Party hats and whistles</li>
                        <li>Games, activities</li>
                        <li>Lunch and snacks</li>
                    </ul>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-3">
                    <button
                        onClick={() => setShowPriorityDialog(true)}
                        className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                    >
                        Update Priority
                    </button>

                    <button
                        onClick={() => setShowStatusDialog(true)}
                        className="px-4 py-2 text-sm bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
                    >
                        Update Status
                    </button>
                </div>
            </div>

            {/* Update Status Dialog */}
            <UpdateTaskDialog
                isOpen={showStatusDialog}
                title="Update Task Status"
                taskTitle="Attend Nischal’s Birthday Party"
                currentValue="Not Started"
                options={STATUS_OPTIONS}
                onCancel={() => setShowStatusDialog(false)}
                onConfirm={(value) => {
                    console.log("New Status:", value);
                    setShowStatusDialog(false);
                }}
            />

            {/* Update Priority Dialog */}
            <UpdateTaskDialog
                isOpen={showPriorityDialog}
                title="Update Task Priority"
                taskTitle="Attend Nischal’s Birthday Party"
                currentValue="Moderate"
                options={PRIORITY_OPTIONS}
                onCancel={() => setShowPriorityDialog(false)}
                onConfirm={(value) => {
                    console.log("New Priority:", value);
                    setShowPriorityDialog(false);
                }}
            />

        </div>
    );
};
