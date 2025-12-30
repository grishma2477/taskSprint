export const TodoItem=()=>{
    return (
        <div className="p-4 border rounded-lg mb-3 flex items-start gap-3">
            <div className="w-4 h-4 rounded-full border-4 border-red-400 mt-1"></div>
            <div>
                <h3 className="font-semibold">Attend Nischal’s Birthday Party</h3>
                <p className="text-sm text-gray-600">Buy gifts on the way and pick up cake...</p>
                <p className="text-xs text-gray-400">Priority: Moderate   Status: Not Started</p>
            </div>
            <img src="/party.jpg" alt="img" className="w-16 h-16 rounded-lg ml-auto" />
        </div>
    );
}
