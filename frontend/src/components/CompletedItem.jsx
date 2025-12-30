export const CompletedItem = ()=>{
    return (
        <div className="p-4 border rounded-lg mb-3 flex items-start gap-3">
            <div className="w-4 h-4 rounded-full border-4 border-green-600 mt-1"></div>
            <div>
                <h3 className="font-semibold">Walk the dog</h3>
                <p className="text-sm text-gray-600">Take the dog to the park...</p>
                <p className="text-xs text-green-600">Status: Completed</p>
            </div>
            <img src="/dog.jpg" className="w-16 h-16 rounded-lg ml-auto" />
        </div>
    );
}
