import { Link } from "react-router-dom";
import {TodoItem} from "./TodoItem";

export const TodoList=({tasks})=>{
    return (
        <div className="bg-white shadow rounded-lg p-4 w-full">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-red-400">Upcoming Tasks</h2>
                <button className="text-red-400">
                    <Link to="/mytask">Show more</Link>
                </button>
            </div>
            {tasks.filter((task) => task.status !== "Completed").slice(0, 5).map((task)=><TodoItem task={task}/>)}
        </div>
    );
}