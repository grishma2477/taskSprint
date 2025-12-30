import { WelcomeHeader } from "../components/WelcomeHeader.jsx";
import { TodoList } from "../components/TodoList.jsx";
import { TaskStatus } from "../components/TaskStatus.jsx";
import { CompletedTask } from "../components/CompletedTask.jsx";
import { useState } from "react";
import * as userService from "../services/UserService.js"
import * as tasksService from "../services/TasksService.js"
import { useEffect } from "react";

export default function Dashboard() {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        profilePicUrl: ""
    });
    const [allTasks, setAllTasks] = useState([]);
    const [taskStats, setTaskStats] = useState({
        completedPercent: 0,
        inProgressPercent: 0,
        notStartedPercent: 0
    });

    useEffect(() => {
        getUserInfo();
        getTasksStats();
        getAllTasks();
    }, []);

    const getUserInfo = async () => {
        const res = await userService.getMyProfile();

        if (!res.success) {
            return;
        }
        setUserInfo(res.data);
    }

    const getTasksStats = async () => {
        const res = await tasksService.getTasksStats();

        if (!res.success) {
            return;
        }
        setTaskStats(res.data);
    }


    const getAllTasks = async () => {
        const res = await tasksService.getAllTasks();
        if (!res.success){
            return;
        }
        setAllTasks(res.data);
    }
    return (
        <div className="flex">

            <div className="flex-1 p-6 bg-gray-100">
                <WelcomeHeader firstName={userInfo.firstName} />

                <div className="grid grid-cols-3 gap-6 mt-6">
                    <div className="col-span-2 space-y-4">
                        <TodoList 
                        tasks={allTasks}
                        />
                    </div>

                    <div className="space-y-4">
                        <TaskStatus
                            taskStats={taskStats}
                        />
                        <CompletedTask 
                        tasks={allTasks}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
