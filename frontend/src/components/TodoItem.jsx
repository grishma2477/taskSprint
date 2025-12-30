import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/DateFormatter";

export const TodoItem = ({ task }) => {
    const navigate = useNavigate();
    return (
        <div className="relative p-4 border rounded-lg mb-3 flex items-start gap-3"
            onClick={() => navigate(`view-task/${task._id}`)}
        >

            {/* Priority indicator */}
            <div className="w-4 h-4 rounded-full border-4 border-red-400 mt-1"></div>

            <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>

                <p className="text-xs mt-1">
                    <span className="font-semibold">Priority: </span>
                    <span className="text-blue-600 font-medium mr-3">
                        {task.priority}
                    </span>

                    <span className="font-semibold">Status: </span>
                    <span className="text-red-600 font-medium">
                        {task.status}
                    </span>
                </p>
            </div>

            <img
                src={task.img}
                alt="img"
                className="w-16 h-16 rounded-lg ml-auto"
            />

            {/* 🔥 Bottom-right Due Date */}
            <p className="absolute bottom-2 right-3 text-xs text-orange-500">
                Due: {formatDate(task.dueDate)}
            </p>
        </div>
    );
};
