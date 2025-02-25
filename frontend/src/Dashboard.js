/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Dashboard = () => {
    const currentLearningPlan = {
        teachingSupport: [
            { type: "Extended Assignment Deadlines", status: "Approved", courses: ["Marketing 101", "Business Ethics"] },
            { type: "Note-Taking Assistant", status: "Active", courses: ["Financial Management", "Economics"] },
            { type: "Recorded Lectures", status: "Active", courses: ["All Courses"] }
        ]
    };

    const pendingForms = [
        { id: "F-2024-089", type: "Missing Medical Report", submitted: "2024-02-20" },
    ];

    const approvedForms = [
        { id: "F-2024-071", type: "Exam Accommodation", approved: "2024-01-20" },
        { id: "F-2024-075", type: "Note-Taking Service", approved: "2024-02-01" }
    ];

    const previousPlan = {
        semester: "Fall 2023",
        accommodations: [
            "Extra Time on Exams (25%)",
            "Quiet Testing Environment",
            "Digital Materials"
        ]
    };

    const feedbacks = [
        { from: "Dr. Sarah", date: "2024-02-20", message: "Good progress in utilizing note-taking services" },
        { from: "Support Office", date: "2024-02-15", message: "Successfully implemented exam accommodations" }
    ];

    const announcements = [
        { title: "Spring Break Support Services", date: "2024-02-23" },
        { title: "New Assistive Technology Available", date: "2024-02-22" },
        { title: "Upcoming Workshop: Study Strategies", date: "2024-02-20" }
    ];

    const meetings = [
        { title: "Support Review Meeting", date: "2024-03-01", time: "14:00" },
        { title: "Exam Arrangements Discussion", date: "2024-03-05", time: "11:30" }
    ];

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 flex flex-col">
                <div className="p-6">
                    <h1 className="text-lg font-bold mb-4" tabIndex="0" role="Website title" aria-label="ESLSCA Accomodation Website">Accommodation's Office</h1>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                        <div>
                            <p className="font-semibold">Welcome Back,</p>
                            <p className="text-sm">Ahmed Hatem</p>
                        </div>
                    </div>
                </div>
                <nav tabIndex="1" role="Navigation bar" aria-label="Links to each page, you can navigate vertically through the arrow keys"  className="m-2 space-y-4">
                    <a
                        href="#"
                        className="block py-2 px-4 bg-[#007ECA]/70 rounded-xl text-white hover:bg-[#007ECA]/60"
                    >
                        Dashboard
                    </a>
                    <a
                        href="/StudentForm"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Forms
                    </a>
                    <a
                        href="/StudentRequests"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Requests
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Plans
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Feedback
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Calendar
                    </a>
                    <a
                        href="/StudentSettings"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Settings
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
                <h1 tabIndex="2" role="Dashboard section" aria-label="You are now on the main dashboard" className="text-2xl font-bold mb-6 text-black">Dashboard</h1>
                <div className="grid grid-cols-3 gap-6">
                    {/* Current Learning Plan */}
                    <div className="col-span-2 bg-[#007ECA] rounded-xl p-4 h-auto min-h-[12rem]">
                        <h2 tabIndex="3" role="Current Learning Plan" aria-label="This section shows the current learning plan assigned" className="text-lg font-semibold mb-3">Current Learning Plan</h2>
                        {currentLearningPlan.teachingSupport.map((item, index) => (
                            <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                                <p className="font-medium">{item.type}</p>
                                <p className="text-sm">Status: {item.status}</p>
                                <p className="text-sm">Courses: {item.courses.join(", ")}</p>
                            </div>
                        ))}
                    </div>

                    {/* Pending Forms */}
                    <div className="bg-[#007ECA] rounded-xl p-4">
                        <h2 tabIndex="4" role="Pending Forms" aria-label="This section shows any pending forms" className="text-lg font-semibold mb-3">Requested Forms from Office</h2>
                        {pendingForms.map((form, index) => (
                            <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                                <p className="font-medium">{form.type}</p>
                                <p className="text-sm">ID: {form.id}</p>
                                <p className="text-sm">Submitted: {form.submitted}</p>
                            </div>
                        ))}
                    </div>

                    {/* Approved Forms */}
                    <div className="bg-[#007ECA] rounded-xl p-4 h-auto">
                        <h2 tabIndex="5" role="Approved Forms" className="text-lg font-semibold mb-3">Approved New Requests</h2>
                        {approvedForms.map((form, index) => (
                            <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                                <p className="font-medium">{form.type}</p>
                                <p className="text-sm">ID: {form.id}</p>
                                <p className="text-sm">Approved: {form.approved}</p>
                            </div>
                        ))}
                    </div>

                    {/* Previous Learning Plan */}
                    <div className="bg-[#007ECA] rounded-xl p-4">
                        <h2 tabIndex="6" role="Previous learning plan" className="text-lg font-semibold mb-3">Previous Learning Plan</h2>
                        <div className="bg-[#072D4A]/10 p-2 rounded-lg">
                            <p className="font-medium">{previousPlan.semester}</p>
                            <ul className="list-disc list-inside text-sm mt-2">
                                {previousPlan.accommodations.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Feedback */}
                    <div className="bg-[#007ECA] rounded-xl p-4">
                        <h2 tabIndex="7" role="Feedbacks" className="text-lg font-semibold mb-3">Feedback</h2>
                        {feedbacks.map((feedback, index) => (
                            <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                                <p className="font-medium">From: {feedback.from}</p>
                                <p className="text-sm">{feedback.message}</p>
                                <p className="text-xs mt-1">{feedback.date}</p>
                            </div>
                        ))}
                    </div>



                    {/* Calendar */}
                    <div aria-hidden className="col-span-3 bg-[#B9E4FE] rounded-xl p-6 text-black">
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
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 p-6">
                <div className="bg-[#007ECA] rounded-xl p-4 h-1/2 mb-6">
                    <h2 tabIndex="8" role="Announcements" className="text-xl font-bold mb-3">Announcements</h2>
                    {announcements.map((announcement, index) => (
                        <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                            <p className="font-medium">{announcement.title}</p>
                            <p className="text-xs">{announcement.date}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#007ECA] rounded-xl p-4 h-2/5">
                    <h2 tabIndex="9" role="Meetings" className="text-xl font-bold mb-3">Meetings</h2>
                    {meetings.map((meeting, index) => (
                        <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                            <p className="font-medium">{meeting.title}</p>
                            <p className="text-xs">Date: {meeting.date}</p>
                            <p className="text-xs">Time: {meeting.time}</p>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default Dashboard;
