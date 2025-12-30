import {TodoItem} from "./TodoItem";

export const TodoList=()=>{
    return (
        <div className="bg-white shadow rounded-lg p-4 w-full">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold text-red-400">To-Do</h2>
                <button className="text-red-400">+ Add task</button>
            </div>

            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}
