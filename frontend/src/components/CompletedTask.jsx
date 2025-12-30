import {CompletedItem} from "./CompletedItem";

export const CompletedTask=()=>{
    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-600">Completed Task</h2>

            <CompletedItem />
            <CompletedItem />
        </div>
    );
}
