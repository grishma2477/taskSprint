import {CompletedItem} from "./CompletedItem.jsx";

export const CompletedTask=({tasks})=>{
    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-600">Completed Task</h2>
           
           {
            tasks.filter(task=>task.status === "Completed").slice(0,4).map(task=><CompletedItem task={task}/>)
           }
        </div>
    );
}
