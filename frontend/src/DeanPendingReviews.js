import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const DeanPendingReviews = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);
    const navigate = useNavigate();

    // Get dean data from local storage
    const deanData = JSON.parse(localStorage.getItem('deanData') || '{}');
    const faculty = deanData.faculty;
    const deanName = deanData.name;

    useEffect(() => {
        // Check if dean is logged in
        if (!deanData || !deanData._id) {
            navigate('/login');
            return;
        }

        // Fetch students from the dean's faculty that need review
        axios
            .get(`http://localhost:4000/api/deans/students/${faculty}`)
            .then((response) => {
                if (response.data.success) {
                    setStudents(response.data.students);
                    setFilteredStudents(response.data.students);
                } else {
                    setError("Failed to fetch students");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [faculty, deanData, navigate]);

    // Handle search
    useEffect(() => {
        if (searchQuery === "") {
            setFilteredStudents(students);
        } else {
            const lowerCaseQuery = searchQuery.toLowerCase();
            const filtered = students.filter((student) =>
                student.name.toLowerCase().includes(lowerCaseQuery) ||
                student.id.toString().includes(lowerCaseQuery) ||
                student.faculty.toLowerCase().includes(lowerCaseQuery) ||
                student.disability.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredStudents(filtered);
        }
    }, [searchQuery, students]);

    const handleLogout = () => {
        localStorage.removeItem('deanData');
        navigate('/login');
    };

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
                    <NavLink to="/dean-dashboard" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Dashboard </NavLink>
                    <NavLink to="/dean-pending-reviews" className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"> Pending Reviews </NavLink>
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

            {/* Main Content */}
            <main className="flex-1 bg-blue-100 p-8">
                <h1 className="text-2xl font-bold mb-6 text-black">Pending Reviews - {faculty} Faculty</h1>

                {/* Search and Filter */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by name, ID, disability, etc."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 px-4 py-2 rounded-xl shadow-lg bg-blue-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                    />
                </div>

                {/* Student Cards */}
                <div className="grid grid-cols-3 gap-6">
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map((student) => (
                            <NavLink key={student.id} to={`/dean-review/${student.id}`}>
                                <div className="bg-[#007ECA] rounded-xl p-3 flex items-start space-x-3 shadow-lg">
                                    <div className="w-11 h-11 flex-shrink-0">
                                        <img
                                            src={student.image}
                                            alt={`${student.name}'s avatar`}
                                            className="w-11 h-11 rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <h2 className="text-lg font-semibold truncate">{student.name}</h2>
                                        <p className="text-sm">ID: {student.id}</p>
                                        <p className="text-sm">Disability: {student.disability}</p>
                                        <span className="inline-block mt-1 bg-yellow-500 text-white text-xs px-2 py-1 rounded-xl">
                                            Needs Review
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                        ))
                    ) : (
                        <div className="col-span-3 text-center p-6 bg-white rounded-xl shadow-lg">
                            <p className="text-black text-xl">No students pending review in {faculty} faculty.</p>
                        </div>
                    )}
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

export default DeanPendingReviews;