import { NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";


const FoodLogHome = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <NavBar />
            <div className="m-30 max-w-full flex justify-center items-center flex-col">
                <h1 className="font-bold text-3xl italic">Welcome to Food Log!</h1>
                <div className="flex justify-center m-10 gap-10 items-center">
                    <NavLink to="/PreviousLogs">
                        <div className="font-bold text-3xl text-white rounded-xl p-25 bg-green-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-900 shadow-xl shadow-black/20">Previous Logs</div>
                    </NavLink>
                    <NavLink to="/AddNewLog">
                        <div className="font-bold text-3xl text-white rounded-xl p-25 bg-green-950 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-900 shadow-xl shadow-black/20">Add New Log</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default FoodLogHome;