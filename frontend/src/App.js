/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:4000/admin-dashboard")
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
    }, []);

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-500">Error: {error}</div>;
    }

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
                            <p className="text-sm">Staff Name</p>
                        </div>
                    </div>
                </div>
                <nav className="m-2 space-y-4">
                    <a
                        href="#"
                        className="block py-2 px-4 bg-[#007ECA]/70 rounded-xl text-white hover:bg-[#007ECA]/60"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Students
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Approved
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Pending
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Applied
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Meetings
                    </a>
                </nav>
                <div className="mt-auto p-6">
                    <button className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Dashboard */}
            <main className="flex-1 bg-blue-100 p-8">
                <h1 className="text-2xl font-bold mb-6 text-black">Dashboard</h1>

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
                <div className="col-span-3 bg-[#B9E4FE] rounded-xl p-6 mb-6 text-black">
                    <h2 className="text-lg font-semibold mb-4">November</h2>
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
                                className={`py-2 rounded ${day + 1 === 23 ? "bg-[#072D4A]/90 text-white" : ""
                                    }`}
                            >
                                {day + 1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pending Students Sections */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#007ECA] rounded-xl p-6">
                        <h2 className="text-2xl font-bold">Pending Students</h2>
                        <ul className="mt-4 space-y-2">
                            <li>Student 1</li>
                            <li>Student 2</li>
                            <li>Student 3</li>
                            <li>Student 4</li>
                            <li>Student 5</li>
                            <li>Student 6</li>
                        </ul>
                    </div>
                    <div className="bg-[#6A5ACD] rounded-xl p-6">
                        <h2 className="text-2xl font-bold">Pending Students</h2>
                        <ul className="mt-4 space-y-2">
                            <li>Student 1</li>
                            <li>Student 2</li>
                            <li>Student 3</li>
                            <li>Student 4</li>
                            <li>Student 5</li>
                            <li>Student 6</li>
                        </ul>
                    </div>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 p-6">
                <div className="bg-[#007ECA] rounded-xl p-4 h-1/2 mb-6">
                    <h2 className="text-xl font-bold">Announcements</h2>
                </div>
                <div className="bg-[#007ECA] rounded-xl p-4 h-2/5">
                    <h2 className="text-xl font-bold">Meetings</h2>
                </div>
            </aside>
        </div>
    );
};

export default AdminDashboard;
