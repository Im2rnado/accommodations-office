/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AccessabilityFeatures from './AccessibilityFeatures';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DashboardNavBar from "./DashboardNavBar";

const Dashboard = () => {
    const navigate = useNavigate();
    const studentId = localStorage.getItem('studentId');
    const [currentLearningPlan, setCurrentLearningPlan] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError,] = useState(null);

    // Check if user is logged in
    useEffect(() => {
        if (!studentId) {
            navigate('/login');
        }
    }, [navigate, studentId]);

    useEffect(() => {
        const fetchStudentData = async () => {
            setLoading(true);

            try {
                if (studentId) {
                    // Fetch student by ID
                    const studentResponse = await axios.get(`http://localhost:4000/api/students/${studentId}`);

                    if (studentResponse.data.success && studentResponse.data.student) {
                        const student = studentResponse.data.student;

                        // Set current learning plan from student data
                        if (student.currentLearningPlan) {
                            setCurrentLearningPlan([{
                                teachingSupport: student.currentLearningPlan["Teaching Support"]?.map(item => ({
                                    type: item.item,
                                    status: item.value === true ? "Active" : "Inactive",
                                    courses: Array.isArray(item.subject) ? item.subject : ["All Courses"]
                                })) || []
                            }]);
                        } else {
                            setCurrentLearningPlan([{ teachingSupport: [] }]);
                        }

                        // Set previous plan data if available
                        if (student.previousLearningPlan) {
                            setPreviousPlan([{
                                semester: "Previous Semester",
                                accommodations: student.previousLearningPlan["Teaching Support"]?.map(item =>
                                    `${item.item}${typeof item.value === 'boolean' ? (item.value ? " - Enabled" : " - Disabled") : `: ${item.value}`}`
                                ) || []
                            }]);
                        } else {
                            setPreviousPlan([{
                                semester: "No Previous Plans",
                                accommodations: ["No previous accommodations found"]
                            }]);
                        }
                    } else {
                        setError("Student data not found");
                    }
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
                setError("Error loading student data");
            } finally {
                setLoading(false);
            }
        };

        fetchStudentData();
    }, [studentId]);

    const [forms, setForms] = useState([]);

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await axios.get('http://localhost:4000/forms');
                setForms(response.data);
            } catch (error) {
                console.error('Error fetching PendingForms:', error);
            }
        };

        fetchForms();
    }, []);

    const approvedForms = [
        { id: "F-2024-071", type: "Exam Accommodation", approved: "2024-01-20" },
        { id: "F-2024-075", type: "Note-Taking Service", approved: "2024-02-01" }
    ];

    const [previousPlan, setPreviousPlan] = useState([]);

    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('http://localhost:4000/feedback');
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchFeedbacks();
    }, []);

    // const announcements = [
    //     { title: "Spring Break Support Services", date: "2024-02-23" },
    //     { title: "New Assistive Technology Available", date: "2024-02-22" },
    //     { title: "Upcoming Workshop: Study Strategies", date: "2024-02-20" }
    // ];

    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/announcements');
                setAnnouncements(response.data.announcements);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchAnnouncements();
    }, []);

    const meetings = [
        { title: "Support Review Meeting", date: "2024-03-01", time: "14:00" },
        { title: "Exam Arrangements Discussion", date: "2024-03-05", time: "11:30" }
    ];

    // Show loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-white text-xl">Loading your dashboard...</div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-red-400 text-xl">
                    <p>{error}</p>
                    <button
                        onClick={() => navigate('/login')}
                        className="mt-4 px-4 py-2 bg-[#007ECA] rounded-lg"
                    >
                        Return to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <AccessabilityFeatures></AccessabilityFeatures>
            {/* Sidebar */}

            <DashboardNavBar />
            {/* Main Dashboard */}
            <main className="flex-1 bg-blue-100 p-8">
                <h1 tabIndex="2" role="Dashboard section" aria-label="You are now on the main dashboard" className="text-2xl font-bold mb-6 text-black">Dashboard</h1>
                <div className="grid grid-cols-2 gap-6">
                    {/* Current Learning Plan - First Column */}
                    <div className="bg-gradient-to-br from-[#007ECA] to-[#2196f3] rounded-xl p-5 shadow-lg h-auto min-h-[calc(100vh-12rem)]">
                        <h2 tabIndex="3" role="Current Learning Plan" aria-label="This section shows the current learning plan assigned" className="text-xl font-semibold mb-4 text-white">Current Learning Plan</h2>
                        {currentLearningPlan[0] && currentLearningPlan[0]["Teaching Support"] && currentLearningPlan[0]["Teaching Support"].length > 0 ? (
                            currentLearningPlan[0]["Teaching Support"].map((item, index) => (
                                <div key={index} className="mb-3 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                                    <p className="font-medium text-blue-900">{item.type}</p>
                                    <p className="text-sm text-blue-800">Status: <span className={`font-semibold ${item.status === "Active" ? "text-green-700" : "text-blue-700"}`}>{item.status}</span></p>
                                    <p className="text-sm text-blue-800">Courses: {item.courses.join(", ")}</p>
                                </div>
                            ))
                        ) : (
                            <div className="mb-2 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                                <p className="font-medium text-center text-blue-800">No current learning plan available</p>
                            </div>
                        )}
                    </div>

                    {/* Second Column - 4 Rows */}
                    <div className="space-y-6">
                        {/* Forms - Row 1 */}
                        <div className="bg-gradient-to-r from-[#007ECA] to-[#1e88e5] rounded-xl p-5 shadow-lg">
                            <h2 tabIndex="4" role="Pending Forms" aria-label="This section shows any pending forms" className="text-lg font-semibold mb-3">Requested Forms from Office</h2>
                            {forms && forms.length > 0 ? (
                                forms.filter((forms) => forms.status === "pending").map((form, index) => (

                                    <div key={index} className="mb-3 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                                        <p className="font-medium text-blue-900">{form.type}</p>
                                        <p className="text-sm text-blue-800">ID: <span className="font-mono">{form.id}</span></p>
                                        <p className="text-sm text-blue-800">Submitted: {form.submitted}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="mb-2 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                                    <p className="font-medium text-center text-blue-800">No pending forms</p>
                                </div>
                            )}
                        </div>

                        {/* Approved Forms - Row 2 */}
                        <div className="bg-gradient-to-r from-[#007ECA] to-[#1e88e5] rounded-xl p-5 shadow-lg">
                            <h2 tabIndex="5" role="Approved Forms" className="text-lg font-semibold mb-3">Approved New Requests</h2>
                            {approvedForms.map((form, index) => (
                                <div key={index} className="mb-3 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                                    <p className="font-medium text-blue-900">{form.type}</p>
                                    <p className="text-sm text-blue-800">ID: <span className="font-mono">{form.id}</span></p>
                                    <p className="text-sm text-blue-800">Approved: {form.approved}</p>
                                </div>
                            ))}
                        </div>

                        {/* Previous Learning Plan - Row 3 */}
                        <div className="bg-gradient-to-r from-[#007ECA] to-[#1e88e5] rounded-xl p-5 shadow-lg">
                            <h2 tabIndex="6" role="Previous learning plan" className="text-lg font-semibold mb-3">Previous Learning Plan</h2>
                            <div className="bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                                {previousPlan && previousPlan.length > 0 ? (
                                    <>
                                        <p className="font-medium text-blue-900">{previousPlan[0]?.semester}</p>
                                        <ul className="list-disc list-inside text-sm mt-2 text-blue-800">
                                            {previousPlan.map((plan, index) => (
                                                <li key={index}>Accommodations:
                                                    {plan.accommodations.map((accommodation, idx) => (
                                                        <ol key={idx} className="ml-4 mt-1">{accommodation}</ol>
                                                    ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <p className="font-medium text-center text-blue-800">No previous learning plans</p>
                                )}
                            </div>
                        </div>

                        {/* Feedback - Row 4 */}
                        <div className="bg-gradient-to-r from-[#007ECA] to-[#1e88e5] rounded-xl p-5 shadow-lg">
                            <h2 tabIndex="7" role="Feedbacks" className="text-lg font-semibold mb-3">Feedback</h2>
                            {feedbacks && feedbacks.length > 0 ? (
                                feedbacks.map((feedback, index) => (
                                    <div key={index} className="mb-3 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                                        <p className="font-medium text-blue-900">From: {feedback.from}</p>
                                        <p className="text-sm text-blue-800">{feedback.message}</p>
                                        <p className="text-xs mt-2 text-blue-600">{feedback.date}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="mb-2 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                                    <p className="font-medium text-center text-blue-800">No feedback available</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Calendar - Full Width */}
                    <div aria-hidden className="col-span-2 bg-gradient-to-r from-[#B9E4FE] to-[#c1e8ff] rounded-xl p-6 shadow-lg text-black">
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
                                    className={`py-2 rounded ${day + 1 === 23 ? "bg-blue-600 text-white shadow-sm" : ""
                                        }`}
                                >
                                    {day + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 p-6">
                <div className="bg-gradient-to-b from-[#007ECA] to-[#1e88e5] rounded-xl p-3 shadow-lg h-max mb-6">
                    <h2 tabIndex="8" role="Announcements" className="text-xl font-bold mb-3">Announcements</h2>
                    {announcements?.map((announcement, index) => (
                        <div key={index} className="mb-3 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                            <p className="font-medium text-blue-900">{announcement.title}</p>
                            <p className="text-xs text-blue-600 mt-1">{announcement.date}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-gradient-to-b from-[#007ECA] to-[#1e88e5] rounded-xl p-3 shadow-lg h-max">
                    <h2 tabIndex="9" role="Meetings" className="text-xl font-bold mb-3">Meetings</h2>
                    {meetings.map((meeting, index) => (
                        <div key={index} className="mb-3 bg-blue-50/85 p-3 rounded-lg shadow-sm border border-blue-200">
                            <p className="font-medium text-blue-900">{meeting.title}</p>
                            <p className="text-xs text-blue-700">Date: {meeting.date}</p>
                            <p className="text-xs text-blue-700">Time: {meeting.time}</p>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default Dashboard;
