import React from "react";
import AccessabilityFeatures from './AccessibilityFeatures';
import DashboardNavBar from "./DashboardNavBar";

function StudentPlan() {
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

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <AccessabilityFeatures></AccessabilityFeatures>
            {/* Sidebar */}
            <DashboardNavBar />

            {/* Settings */}
            <div className="flex flex-col bg-blue-100 w-full h-screen">
                <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Learning Plans</h1>

                {/* Current Learning Plan */}
                <div className="ml-5 mt-10 mr-10 col-span-2 bg-[#007ECA] rounded-xl p-4 h-auto min-h-[12rem]">
                    <h2 tabIndex="3" role="Current Learning Plan" aria-label="This section shows the current learning plan assigned" className="text-lg font-semibold mb-3">Current Learning Plan</h2>
                    {currentLearningPlan["Teaching Support"].map((item, index) => (
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