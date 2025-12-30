import { formatDate } from "../utils/DateFormatter";

export const TaskItem = ({ task, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="relative cursor-pointer p-4 rounded-xl border shadow-sm hover:shadow-md transition-all bg-gray-50 flex items-start justify-between"
        >
            <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600 mr-2">{task.description}</p>

                <p className="text-xs">
                    <span className="font-semibold">Priority: </span>
                    <span className="text-blue-600 font-semibold">
                        {task.priority}
                    </span>
                </p>

                <p className="text-xs mt-1">
                    <span className="font-semibold">Status: </span>
                    <span className="text-red-600 font-semibold">
                        {task.status}
                    </span>
                </p>
            </div>

            <img
                src={task.img}
                alt=""
                className="w-20 h-16 rounded-md object-cover"
            />

                <span className="absolute bottom-2 right-3 text-xs text-gray-500">
                    Due: {formatDate(task.dueDate)}
                </span>
        
        </div>
    );
};
