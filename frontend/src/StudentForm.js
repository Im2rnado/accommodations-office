import React from "react";
import AccessabilityFeatures from './AccessibilityFeatures';

function StudentForm()
{
    const pendingForms = [
        { id: "F-2024-089", type: "Extra Time Request", submitted: "2024-02-20" },
        { id: "F-2024-092", type: "Assistive Technology", submitted: "2024-02-22" }
    ];

    const approvedForms = [
        { id: "F-2024-067", type: "Learning Support", approved: "2024-01-15" },
        { id: "F-2024-071", type: "Exam Accommodation", approved: "2024-01-20" },
        { id: "F-2024-075", type: "Note-Taking Service", approved: "2024-02-01" }
    ];

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
                        className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"
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
                        href="./StudentPlan"
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
            <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Forms</h1>

            {/* Pending Forms */}
                    <div className="bg-[#007ECA] ml-5 mt-5 mr-5 rounded-xl p-4">
                        <h2 tabIndex="4" role="Pending Forms" aria-label="This section shows any pending forms" className="text-lg font-semibold mb-3">Pending Forms</h2>
                        {pendingForms.map((form, index) => (
                            <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                                <p className="font-medium">{form.type}</p>
                                <p className="text-sm">ID: {form.id}</p>
                                <p className="text-sm">Submitted: {form.submitted}</p>
                            </div>
                        ))}
                    </div>

            {/* Approved Forms */}
            <div className="bg-[#007ECA] mr-5 ml-5 mt-5 rounded-xl p-4 h-auto">
                        <h2 tabIndex="5" role="Approved Forms" className="text-lg font-semibold mb-3">Approved Forms</h2>
                        {approvedForms.map((form, index) => (
                            <div key={index} className="mb-2 bg-[#072D4A]/10 p-2 rounded-lg">
                                <p className="font-medium">{form.type}</p>
                                <p className="text-sm">ID: {form.id}</p>
                                <p className="text-sm">Approved: {form.approved}</p>
                            </div>
                        ))}
                    </div>
        </div>
        </div>
    );
}


export default StudentForm;