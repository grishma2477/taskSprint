import React from "react";

export const VitalTaskItem = ({ task, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer p-4 rounded-xl border shadow-sm hover:shadow-md transition-all bg-gray-50 flex items-center justify-between"
        >
            <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>

                <div className="text-xs mt-2">
                    <span className="mr-3 font-semibold">Priority: <span className="text-blue-600">{task.priority}</span></span>
                    <span>Status: <span className="text-red-600">{task.status}</span></span>
                </div>
            </div>

            <img
                src={task.img}
                alt=""
                className="w-20 h-16 rounded-md object-cover ml-4"
            />
        </div>
    );
};
