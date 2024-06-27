import { Link } from "react-router-dom";

export function navegacion() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/tasks">
                <h2 className="font-bold text-3x1 mb-4">task app</h2>
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg">
            <Link to="/tasks-create">crear una task</Link>
            </button>
        </div>
    )
}

