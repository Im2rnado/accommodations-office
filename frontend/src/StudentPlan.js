import React from "react";
import AccessabilityFeatures from './AccessibilityFeatures';

function StudentPlan()
{
    const currentLearningPlan = {
        teachingSupport: [
            { type: "Access to private study rooms/exams", status: "Approved", courses: ["Marketing 101", "Business Ethics"] },
            { type: "Scribe Teacher", status: "Active", courses: ["Financial Management", "Economics"] },
            { type: "Attendance policy", status: "Active", courses: ["All Courses"] },
            { type: "Modifying course materials", status: "Inactive", courses: ["Calculus D401"] }
        ]
    };

    const previousPlan = {
        semester: "Fall 2023",
        accommodations: [
            "Extra Time on Exams (25%)",
            "Quiet Testing Environment",
            "Digital Materials"
        ]
    };

    return( 
        <div className="flex min-h-screen bg-gray-900 text-white">
            <AccessabilityFeatures></AccessabilityFeatures>
            {/* Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 flex flex-col">
                <div className="p-6">
                    <h1 className="text-lg font-bold mb-4">Accommodation's Office</h1>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                        <div>
                            <p className="font-semibold">Welcome Back,</p>
                            <p className="text-sm">Student's Name</p>
                        </div>
                    </div>
                </div>
                <nav className="m-2 space-y-4">
                    <a
                        href="/dashboard"
                        className="block py-2 px-4  rounded-xl text-white hover:bg-[#007ECA]/60"
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
                        className="block py-2 px-4 text-white bg-[#007ECA]/70 hover:bg-[#007ECA]/60 rounded-xl"
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
                        href="./StudentPDF"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Convert PDF
                    </a>
                </nav>
                <div className="mt-auto p-6">
                    <button className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Settings */}
        <div className="flex flex-col bg-blue-100 w-full h-screen">
            <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Learning Plans</h1>

             {/* Current Learning Plan */}
             <div className="ml-5 mt-10 mr-10 col-span-2 bg-[#007ECA] rounded-xl p-4 h-auto min-h-[12rem]">
                        <h2 tabIndex="3" role="Current Learning Plan" aria-label="This section shows the current learning plan assigned" className="text-lg font-semibold mb-3">Current Learning Plan</h2>
                        {currentLearningPlan.teachingSupport.map((item, index) => (
                            <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                                <p className="font-medium">{item.type}</p>
                                <p className="text-sm">Status: {item.status}</p>
                                <p className="text-sm">Courses: {item.courses.join(", ")}</p>
                            </div>
                        ))}
             </div>

             {/* Previous Learning Plan */}
             <div className="ml-5 mt-5 mr-10 bg-[#007ECA] rounded-xl p-4">
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
        
        </div>

        </div>
    );
}


export default StudentPlan;