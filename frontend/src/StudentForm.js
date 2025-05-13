import React from "react";
import AccessabilityFeatures from './AccessibilityFeatures';
import DashboardNavBar from "./DashboardNavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function StudentForm() {
    const pendingForms = [
        { id: "F-2024-089", type: "Extra Time Request", submitted: "2024-02-20" },
        { id: "F-2024-092", type: "Assistive Technology", submitted: "2024-02-22" }
    ];

    const approvedForms = [
        { id: "F-2024-067", type: "Learning Support", approved: "2024-01-15" },
        { id: "F-2024-071", type: "Exam Accommodation", approved: "2024-01-20" },
        { id: "F-2024-075", type: "Note-Taking Service", approved: "2024-02-01" }
    ];

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

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <AccessabilityFeatures></AccessabilityFeatures>
            {/* Sidebar */}
            <DashboardNavBar />

            {/* Settings */}
            <div className="flex flex-col bg-blue-100 w-full h-screen">
                <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Forms</h1>

                {/* Pending Forms */}
                <div className="bg-gradient-to-r from-[#007ECA] to-[#1e88e5] ml-5 mt-5 mr-5 rounded-xl p-4">
                    <h2 tabIndex="4" role="Pending Forms" aria-label="This section shows any pending forms" className="text-2xl font-bold mb-3">Pending Forms</h2>
                    <h2 tabIndex="4" className="text-xl opacity-75 mb-3">Upload and submit the requested forms and documents</h2>
                    {forms.filter((forms) => forms.status === "pending").map((form, index) => (
                        <form key={index} className="mb-2 bg-[#007ECA] mb-5 p-5 rounded-lg flex-col flex">
                            <p className="text-xl font-medium">{form.type}</p>
                            <p className="text-lg">ID: {form.id}</p>
                            <p className="text-lg">Submitted: {form.submitted}</p>
                            <input className="rounded bg-blue-50 text-blue-800 w-max" type="file" />
                            <button type="submit" className="w-40 h-max pt-2 pb-2 mt-5 rounded-xl bg-white text-blue-800 font-bold">Submit Form</button>
                        </form>
                    ))}
                </div>


            </div>
        </div>
    );
}


export default StudentForm;