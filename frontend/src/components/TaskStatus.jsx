export const TaskStatus = ({taskStats}) => {
    const data = [
        { label: "Completed", value: taskStats.completedPercent },
        { label: "In Progress", value: taskStats.inProgressPercent },
        { label: "Not Started", value: taskStats.notStartedPercent },
    ];

    const getColor = (value) => {
        if (value >= 70) return "#22c55e"; // green
        if (value >= 40) return "#3b82f6"; // blue
        return "#ef4444"; // red
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-400">Task Status</h2>

            <div className="flex items-center justify-between mt-4">
                {data.map((task, index) => {
                    const radius = 40;
                    const circumference = 2 * Math.PI * radius;
                    const progress = ((100 - task.value) / 100) * circumference;

                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-[100px] h-[100px] flex items-center justify-center">
                                <svg width="100" height="100">
                                    {/* Background Circle */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        stroke="#e5e7eb"
                                        strokeWidth="10"
                                        fill="none"
                                    />

                                    {/* Progress Circle */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        stroke={getColor(task.value)}
                                        strokeWidth="10"
                                        fill="none"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={progress}
                                        strokeLinecap="round"
                                        style={{ transition: "stroke-dashoffset 0.5s ease" }}
                                        transform="rotate(-90 50 50)" // rotate to start from top
                                    />
                                </svg>

                                {/* Centered Percentage text */}
                                <span className="absolute text-xl font-bold">
                                    {task.value}%
                                </span>
                            </div>

                            {/* Status Label */}
                            <p
                                className={`text-sm mt-3 ${task.value >= 70
                                        ? "text-green-600"
                                        : task.value >= 40
                                            ? "text-blue-600"
                                            : "text-red-600"
                                    }`}
                            >
                                {task.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
