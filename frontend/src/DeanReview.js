import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeanReview = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [savingChanges, setSavingChanges] = useState(false);
    const navigate = useNavigate();

    // Get dean data from local storage
    const deanData = JSON.parse(localStorage.getItem('deanData') || '{}');
    const deanName = deanData.name;
    const deanId = deanData._id;

    useEffect(() => {
        // Check if dean is logged in
        if (!deanData || !deanData._id) {
            navigate('/login');
            return;
        }

        // Fetch student data by ID
        axios
            .get(`http://localhost:4000/api/students/${id}`)
            .then((response) => {
                if (response.data.success) {
                    setStudent(response.data.student);
                } else {
                    setError("Failed to fetch student data");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id, deanData, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('deanData');
        navigate('/login');
    };

    // Update accommodation approval status
    const handleApprovalChange = async (supportType, itemIndex, approved, flagged, notes = "") => {
        try {
            setSavingChanges(true);

            const response = await axios.post("http://localhost:4000/api/deans/approve-accommodation", {
                studentId: id,
                supportType,
                itemIndex,
                approved,
                flagged,
                notes,
                deanId
            });

            if (response.data.success) {
                setStudent(response.data.student);
            } else {
                setError("Failed to update accommodation status");
            }

            setSavingChanges(false);
        } catch (err) {
            console.error(err);
            setError("An error occurred while updating accommodation status");
            setSavingChanges(false);
        }
    };

    // Check if all accommodations have been reviewed
    const allReviewed = () => {
        if (!student || !student.learningPlan) return false;

        const examSupport = student.learningPlan["Exam Support"] || [];
        const teachingSupport = student.learningPlan["Teaching Support"] || [];

        const allExamReviewed = examSupport.every(item => item.deanApproved !== null);
        const allTeachingReviewed = teachingSupport.every(item => item.deanApproved !== null);

        return allExamReviewed && allTeachingReviewed;
    };

    if (loading || savingChanges) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-white text-xl">
                    {savingChanges ? "Saving changes..." : "Loading..."}
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="p-6 text-red-500">Error: {error}</div>;
    }

    if (!student) {
        return <div className="p-6 text-red-500">Student not found</div>;
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

            {/* Main Content */}
            <main className="flex-1 bg-blue-100 p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-black">Accommodation Review</h1>
                    <NavLink to="/dean-pending-reviews" className="px-4 py-2 bg-[#072D4A]/90 text-white rounded-lg shadow hover:bg-[#072D4A]/70">
                        Back to List
                    </NavLink>
                </div>

                {/* Student Header */}
                <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src={student.image || "https://via.placeholder.com/64"}
                            alt={`${student.name}'s avatar`}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-xl font-bold text-black">{student.name}</h2>
                            <p className="text-gray-600">Student ID: {student.id}</p>
                            <p className="text-gray-600">Faculty: {student.faculty}</p>
                            <p className="text-gray-600">Disability: {student.disability}</p>
                            <span className="inline-block mt-1 bg-yellow-500 text-white text-xs px-2 py-1 rounded-xl">
                                {student.status}
                            </span>
                        </div>
                    </div>
                </div>

                {allReviewed() && (
                    <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6 rounded shadow">
                        <p className="text-green-700">You've reviewed all accommodations! The student's plan will be updated based on your decisions.</p>
                    </div>
                )}

                {/* Exam Support Accommodations */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                    <h2 className="text-xl font-bold text-black mb-4">Exam Support Accommodations</h2>

                    {student.learningPlan["Exam Support"].length > 0 ? (
                        <div className="space-y-4">
                            {student.learningPlan["Exam Support"].map((accommodation, index) => (
                                <div key={index} className="border p-4 rounded-lg">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-bold text-black">{accommodation.item}</h3>
                                        <div className="text-black">
                                            {typeof accommodation.value === 'boolean' ?
                                                (accommodation.value ? "Enabled" : "Disabled") :
                                                <span>Value: <span className="font-mono">{accommodation.value}</span></span>
                                            }
                                        </div>
                                    </div>

                                    <div className="mt-2 flex flex-wrap gap-4 items-center">
                                        <div className="flex-grow">
                                            <p className="text-sm text-gray-600 font-bold mb-1">Dean's Decision</p>
                                            <div className="flex space-x-2">
                                                <button
                                                    className={`px-4 py-1 rounded text-white ${accommodation.deanApproved === true ? 'bg-green-600' : 'bg-green-400 hover:bg-green-600'}`}
                                                    onClick={() => handleApprovalChange('Exam Support', index, true, false)}
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    className={`px-4 py-1 rounded text-white ${accommodation.deanApproved === false && !accommodation.deanFlagged ? 'bg-red-600' : 'bg-red-400 hover:bg-red-600'}`}
                                                    onClick={() => handleApprovalChange('examSupport', index, false, false)}
                                                >
                                                    Reject
                                                </button>
                                                <button
                                                    className={`px-4 py-1 rounded text-white ${accommodation.deanFlagged ? 'bg-yellow-600' : 'bg-yellow-400 hover:bg-yellow-600'}`}
                                                    onClick={() => {
                                                        const notes = prompt("Enter notes for this flagged accommodation:");
                                                        if (notes) {
                                                            handleApprovalChange('examSupport', index, false, true, notes);
                                                        }
                                                    }}
                                                >
                                                    Flag for Discussion
                                                </button>
                                            </div>
                                        </div>

                                        {accommodation.deanApproved !== null && (
                                            <div className="ml-2 text-sm">
                                                <span className={`${accommodation.deanApproved ? 'text-green-600' : 'text-red-600'} font-bold`}>
                                                    {accommodation.deanApproved ? 'Approved' : 'Rejected'}
                                                </span>
                                                {accommodation.deanFlagged && (
                                                    <span className="ml-2 text-yellow-500 font-bold">(Flagged)</span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {accommodation.deanNotes && (
                                        <div className="mt-2 bg-gray-100 p-2 rounded">
                                            <p className="text-sm font-bold text-gray-700">Notes:</p>
                                            <p className="text-sm text-gray-700">{accommodation.deanNotes}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No exam support accommodations specified.</p>
                    )}
                </div>

                {/* Teaching Support Accommodations */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                    <h2 className="text-xl font-bold text-black mb-4">Teaching Support Accommodations</h2>

                    {student.learningPlan["Teaching Support"]?.length > 0 ? (
                        <div className="space-y-4">
                            {student.learningPlan["Teaching Support"].map((accommodation, index) => (
                                <div key={index} className="border p-4 rounded-lg">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-bold text-black">{accommodation.item}</h3>
                                        <div className="text-black">
                                            {typeof accommodation.value === 'boolean' ?
                                                (accommodation.value ? "Enabled" : "Disabled") :
                                                <span>Value: <span className="font-mono">{accommodation.value}</span></span>
                                            }
                                        </div>
                                    </div>

                                    <div className="mt-2 flex flex-wrap gap-4 items-center">
                                        <div className="flex-grow">
                                            <p className="text-sm text-gray-600 font-bold mb-1">Dean's Decision</p>
                                            <div className="flex space-x-2">
                                                <button
                                                    className={`px-4 py-1 rounded text-white ${accommodation.deanApproved === true ? 'bg-green-600' : 'bg-green-400 hover:bg-green-600'}`}
                                                    onClick={() => handleApprovalChange('teachingSupport', index, true, false)}
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    className={`px-4 py-1 rounded text-white ${accommodation.deanApproved === false && !accommodation.deanFlagged ? 'bg-red-600' : 'bg-red-400 hover:bg-red-600'}`}
                                                    onClick={() => handleApprovalChange('teachingSupport', index, false, false)}
                                                >
                                                    Reject
                                                </button>
                                                <button
                                                    className={`px-4 py-1 rounded text-white ${accommodation.deanFlagged ? 'bg-yellow-600' : 'bg-yellow-400 hover:bg-yellow-600'}`}
                                                    onClick={() => {
                                                        const notes = prompt("Enter notes for this flagged accommodation:");
                                                        if (notes) {
                                                            handleApprovalChange('teachingSupport', index, false, true, notes);
                                                        }
                                                    }}
                                                >
                                                    Flag for Discussion
                                                </button>
                                            </div>
                                        </div>

                                        {accommodation.deanApproved !== null && (
                                            <div className="ml-2 text-sm">
                                                <span className={`${accommodation.deanApproved ? 'text-green-600' : 'text-red-600'} font-bold`}>
                                                    {accommodation.deanApproved ? 'Approved' : 'Rejected'}
                                                </span>
                                                {accommodation.deanFlagged && (
                                                    <span className="ml-2 text-yellow-500 font-bold">(Flagged)</span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {accommodation.deanNotes && (
                                        <div className="mt-2 bg-gray-100 p-2 rounded">
                                            <p className="text-sm font-bold text-gray-700">Notes:</p>
                                            <p className="text-sm text-gray-700">{accommodation.deanNotes}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No teaching support accommodations specified.</p>
                    )}
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 p-6">
                <div className="bg-[#007ECA] rounded-xl p-4 h-1/2 mb-6">
                    <h2 className="text-xl font-bold">Medical Information</h2>
                    {student.medicalReports && student.medicalReports.length > 0 && (
                        <div className="mt-4 space-y-2">
                            {student.medicalReports.map((report, index) => (
                                <div key={index} className="bg-blue-600/40 p-2 rounded">
                                    <a href={report.url} target="_blank" rel="noreferrer" className="block text-white hover:underline">
                                        {report.name || `Report ${index + 1}`}
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                    {student.doctorsForm && (
                        <div className="mt-2">
                            <div className="bg-blue-600/40 p-2 rounded">
                                <a href={student.doctorsForm.url} target="_blank" rel="noreferrer" className="block text-white hover:underline">
                                    {student.doctorsForm.name || "Doctor's Form"}
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </aside>
        </div>
    );
};

export default DeanReview;