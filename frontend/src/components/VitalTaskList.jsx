import React from "react";
import { VitalTaskItem } from "./VitalTaskItem.jsx";
import * as userService from "../services/UserService.js";

export const VitalTaskList = ({ vitalTasks, setSelectedVital }) => {

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 col-span-1">
            <h2 className="text-xl font-semibold">
                Vital Tasks
                <span className="block w-20 h-1 bg-red-400 mt-1 rounded-full" />
            </h2>

            <div className="space-y-4 mt-4">
                {vitalTasks.map((item) => (
                    <VitalTaskItem
                        key={item._id}
                        task={item}
                        onClick={() => setSelectedVital(item)}
                    />
                ))}
            </div>
        </div>
    );
};
