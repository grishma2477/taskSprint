import { useNavigate } from "react-router-dom";

export const CompletedItem = ({ task }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/view-task/${task._id}`)}
            className="p-4 border rounded-lg mb-3 flex items-start gap-3 cursor-pointer hover:shadow-md transition"
        >
            <div className="w-4 h-4 rounded-full border-4 border-green-600 mt-1"></div>

            <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-xs text-green-600">Status: Completed</p>
            </div>

            <img
                src="/dog.jpg"
                alt="task"
                className="w-16 h-16 rounded-lg ml-auto"
            />
        </div>
    );
};
