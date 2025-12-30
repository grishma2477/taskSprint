import React from "react";
import { TaskItem } from "./TaskItem.jsx";

export const TaskList = ({ setSelectedTask, tasks }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 col-span-1">
            <h2 className="text-xl font-semibold mb-4">
                My Tasks
                <span className="block w-20 h-1 bg-red-400 mt-1 rounded-full" />
            </h2>

            <div className="space-y-4">
                {tasks.map((task) => (
                    <TaskItem key={task._id} task={task} onClick={() => setSelectedTask(task)} />
                ))}
            </div>
        </div>
    );
};
