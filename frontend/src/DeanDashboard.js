import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeanDashboard = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const deanData = JSON.parse(localStorage.getItem('deanData') || '{}');
    const faculty = deanData.faculty;
    const deanName = deanData.name;
    const deanId = deanData._id;

    useEffect(() => {
        // Check if dean is logged in
        if (!deanData || !deanData._id) {
            navigate('/login');
            return;
        }

        // Fetch dashboard stats for the dean's faculty
        axios
            .get(`http://localhost:4000/api/deans/dashboard/${faculty}`)
            .then((response) => {
                if (response.data.success) {
                    setStats(response.data.stats);
                } else {
                    setError("Failed to fetch stats");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [faculty, deanData, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (error) {
        return <div className="p-6 text-red-500">Error: {error}</div>;
    }

    const handleLogout = () => {
        localStorage.removeItem('deanData');
        navigate('/login');
    };

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 flex flex-col">
                <div className="p-6">
                    <h1 className="text-lg font-bold mb-4">Accommodation's Office</h1>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                        <div>
                            <p className="font-semibold">Welcome Back,</p>
                            <p className="text-sm">{deanName} (Dean)</p>
                        </div>
                    </div>
                </div>

                <nav className="m-2 space-y-4">
                    <NavLink to="/dean-dashboard" className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"> Dashboard </NavLink>
                    <NavLink to="/dean-pending-reviews" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Pending Reviews </NavLink>
                    <NavLink to="/dean-reviewed" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Reviewed </NavLink>
                </nav>

                <div className="mt-auto p-6">
                    <button
                        onClick={handleLogout}
                        className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Dashboard */}
            <main className="flex-1 bg-blue-100 p-8">
                <h1 className="text-2xl font-bold mb-6 text-black">{faculty} Faculty Dashboard</h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#007ECA] p-6 rounded-xl shadow-lg text-center"
                        >
                            <h2 className="text-2xl font-semibold">{stat.title}</h2>
                            <p className="text-4xl mt-2">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Calendar */}
                <div className="col-span-3 bg-[#B9E4FE] rounded-xl shadow-lg p-6 mb-6 text-black">
                    <h2 className="text-lg font-semibold mb-4">Calendar</h2>
                    <div className="grid grid-cols-7 text-center">
                        <span>Mo</span>
                        <span>Tu</span>
                        <span>We</span>
                        <span>Th</span>
                        <span>Fr</span>
                        <span>Sa</span>
                        <span>Su</span>
                        {[...Array(30).keys()].map((day) => (
                            <div
                                key={day}
                                className={`py-2 rounded ${day + 1 === 23 ? "bg-[#072D4A]/90 text-white" : ""}`}
                            >
                                {day + 1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Reviews */}
                <div className="grid grid-cols-2 gap-6">
                    <NavLink to={"/dean-pending-reviews"} className="bg-[#007ECA] rounded-xl p-6 shadow-lg">
                        <h2 className="text-2xl font-bold">Pending Reviews</h2>
                        <p className="mt-2">Students from {faculty} faculty who need their accommodations reviewed.</p>
                    </NavLink>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 p-6">
                <div className="bg-[#007ECA] rounded-xl p-4 h-1/2 mb-6">
                    <h2 className="text-xl font-bold">Announcements</h2>
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="bg-blue-600/40 p-2 rounded">
                            <p>New accommodation guidelines published</p>
                            <p className="text-xs opacity-75">May 10, 2025</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#007ECA] rounded-xl p-4 h-2/5">
                    <h2 className="text-xl font-bold">Meetings</h2>
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="bg-blue-600/40 p-2 rounded">
                            <p>Faculty Meeting</p>
                            <p className="text-xs opacity-75">May 15, 2025 - 10:00 AM</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default DeanDashboard;