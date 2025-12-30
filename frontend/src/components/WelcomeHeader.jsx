export const WelcomeHeader=({firstName})=>{

    return (
        <div className="flex justify-between items-center mt-6">
            <h1 className="text-3xl font-bold">Welcome back, {firstName} 👋</h1>
            <button className="border border-red-400 text-red-400 px-4 py-2 rounded-lg">
                Invite +
            </button>
        </div>
    );
}
