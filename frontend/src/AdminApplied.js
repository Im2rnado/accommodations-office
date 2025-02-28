/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AdminApplied = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/students")
            .then((response) => {
                if (response.data.success) {
                    setStudents(response.data.students.filter(student => student.status === "Applied"));
                } else {
                    setError("Failed to fetch students");
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
                            <p className="text-sm">Laila</p>
                        </div>
                    </div>
                </div>

                <nav className="m-2 space-y-4">
                    <NavLink to="/admin-dashboard" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Dashboard </NavLink>
                    <NavLink to="/admin-students" className="block py-2 px-4  text-white hover:bg-[#007ECA]/60 rounded-xl"> Students </NavLink>
                    <NavLink to="/admin-approved" className="block py-2 px-4  text-white hover:bg-[#007ECA]/60 rounded-xl"> Approved </NavLink>
                    <NavLink to="/admin-pending" className="block py-2 px-4  text-white hover:bg-[#007ECA]/60 rounded-xl"> Pending </NavLink>
                    <NavLink to="/admin-applied" className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"> Applied </NavLink>
                    <NavLink to="/admin-announcements" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Announcements </NavLink>
                </nav>

                <div className="mt-auto p-6">
                    <button className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-blue-100 p-8">
                <h1 className="text-2xl font-bold mb-6 text-black">Students</h1>

                {/* Student Cards */}
                <div className="grid grid-cols-3 gap-6">
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className="bg-[#007ECA] rounded-xl p-3 flex items-start space-x-3"
                        >
                            <div className="w-11 h-11 flex-shrink-0">
                                <img
                                    src={student.image}
                                    alt={`${student.name}'s avatar`}
                                    className="w-11 h-11 rounded-full object-cover"
                                />
                            </div>
                            <div className="flex-grow min-w-0">
                                <h2 className="text-lg font-semibold truncate">{student.name}</h2>
                                <p className="text-sm">{student.id}</p>
                                <p className="text-sm">{student.faculty}</p>
                                <p className="text-sm">{student.disability}</p>
                            </div>
                            <div className="flex-shrink-0 self-center">
                                <span
                                    className={
                                        "text-sm " +
                                        (student.status === "Approved"
                                            ? "bg-green-600"
                                            : student.status === "Pending"
                                                ? "bg-yellow-600"
                                                : "bg-red-600") +
                                        " text-white px-2 py-1 rounded-xl font-semibold"
                                    }
                                >
                                    {student.status}
                                </span>
                            </div>
                        </div>
                    ))}
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

export default AdminApplied;