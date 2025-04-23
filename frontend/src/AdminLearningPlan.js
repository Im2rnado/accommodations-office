/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const AdminLearningPlan = () => {
    const { id } = useParams(); // Extract the student ID from the URL
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [learningPlan, setLearningPlan] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState({}); // Track open dropdowns per support item

    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/students/${id}`)
            .then((response) => {
                if (response.data.success) {
                    setStudent(response.data.student);

                    const initializedLearningPlan = {};
                    Object.entries(response.data.student.learningPlan).forEach(
                        ([category, supports]) => {
                            initializedLearningPlan[category] = supports.map((support) => ({
                                ...support,
                                subject: support.subject && Array.isArray(support.subject) ? support.subject : response.data.student.subjects,
                            }));
                        }
                    );
                    setLearningPlan(initializedLearningPlan);
                } else {
                    setError("Failed to fetch student data.");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleAcceptRequest = async () => {
        try {
            setLoading(true);
            // Call API to update student status to "Pending"
            const response = await axios.put(`http://localhost:4000/api/students/${id}`, {
                status: "Pending"
            });

            if (response.data.success) {
                // If the update was successful, reload the page to show the changes
                window.location.reload();
                // Alternatively, you could navigate to the same page which would trigger a reload
                // navigate(`/admin-learning-plan/${id}`);
            } else {
                setError("Failed to update student status");
                setLoading(false);
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const handleSupportChange = (category, index, value) => {
        const updatedLearningPlan = { ...learningPlan };
        updatedLearningPlan[category][index].value = value;
        setLearningPlan(updatedLearningPlan);
    };

    const handleSubjectCheckboxChange = (category, index, subject) => {
        const updatedLearningPlan = { ...learningPlan };
        const currentSubjects = updatedLearningPlan[category][index].subject;
        if (currentSubjects.includes(subject)) {
            // Remove subject
            updatedLearningPlan[category][index].subject = currentSubjects.filter(s => s !== subject);
        } else {
            // Add subject
            updatedLearningPlan[category][index].subject = [...currentSubjects, subject];
        }
        setLearningPlan(updatedLearningPlan);
    };

    const toggleDropdown = (category, index) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [`${category}-${index}`]: !prev[`${category}-${index}`],
        }));
    };

    if (loading) {
        return <div className="p-6">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-500">Error: {error}</div>;
    }

    if (!student) {
        return <div className="p-6 text-red-500">Student not found.</div>;
    }

    if (student.status === "Applied") {
        return (
            <div className="flex min-h-screen bg-gray-900 text-white" >
                {/* Sidebar */}
                < aside className="w-64 bg-[#072D4A]/90 flex flex-col" >
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
                        <NavLink to="/admin-students" className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"> Students </NavLink>
                        <NavLink to="/admin-approved" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Approved </NavLink>
                        <NavLink to="/admin-pending" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Pending </NavLink>
                        <NavLink to="/admin-applied" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Applied </NavLink>
                        <NavLink to="/admin-announcements" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Announcements </NavLink>
                    </nav>

                    <div className="mt-auto p-6">
                        <button className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                            Logout
                        </button>
                    </div>
                </aside >

                {/* Main Content */}
                < main className="flex-1 bg-blue-100 p-8" >
                    <h1 className="text-2xl font-bold mb-6 text-black">Student Application</h1>

                    {/* Student Header */}
                    <div className="flex items-center space-x-4 mb-4">
                        <img
                            src={student.image || "https://via.placeholder.com/48"}
                            alt={`${student.name}'s avatar`}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-xl font-bold text-black">{student.name}</h2>
                            <p className="text-sm text-black">ID: <span className="font-bold">{student.id}</span></p>
                            <p className="text-sm text-black">Faculty: <span className="font-bold">{student.faculty}</span></p>
                            <p className="text-sm text-black mb-1">Disability: <a className="font-bold">{student.disability}</a></p>
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
                            >{student.status}
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#072D4A] rounded-xl p-4 mb-6 shadow-lg">
                        <div className="flex justify-between items-center">
                            <div className="w-6 h-6 bg-[#007ECA] rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Application Details */}
                    <div className="bg-[#B9E4FE] mb-6 rounded-xl shadow-lg p-6">
                        <h1 className="text-2xl font-bold mb-4 text-black">Application Details</h1>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">Student ID</p>
                                    <p className="font-semibold text-black">{student.id}</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">First Name</p>
                                    <p className="font-semibold text-black">{student.name.split(" ")[0]}</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">Last Name</p>
                                    <p className="font-semibold text-black">{student.name.split(" ")[1]}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">Date of Birth</p>
                                    <p className="font-semibold text-black">{new Date(student.dob).toLocaleDateString()}</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">School</p>
                                    <p className="font-semibold text-black">{student.faculty}</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">Application Date</p>
                                    <p className="font-semibold text-black">{student.applicationDate || new Date().toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        {/* Medical Reports */}
                        <div className="bg-[#B9E4FE] rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold mb-4 text-black">Medical Reports</h2>

                            {student.medicalReports && student.medicalReports.length > 0 ? (
                                <div className="space-y-3">
                                    {student.medicalReports.map((report, index) => (
                                        <div key={index} className="bg-white p-3 rounded-lg shadow flex justify-between items-center">
                                            <span className="text-black font-medium">{report.name || `Medical Report ${index + 1}`}</span>
                                            <button
                                                className="bg-[#007ECA] text-white px-4 py-1 rounded-lg hover:bg-[#007ECA]/80 transition-colors"
                                                onClick={() => window.open(report.url || '#')}
                                            >
                                                Download
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No medical reports submitted</p>
                            )}
                        </div>

                        {/* Doctor's Form */}
                        <div className="bg-[#B9E4FE] rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold mb-4 text-black">Doctor's Form</h2>

                            {student.doctorsForm ? (
                                <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                                    <span className="text-black font-medium">{student.doctorsForm.name || "Doctor's Form"}</span>
                                    <button
                                        className="bg-[#007ECA] text-white px-4 py-1 rounded-lg hover:bg-[#007ECA]/80 transition-colors"
                                        onClick={() => window.open(student.doctorsForm.url || '#')}
                                    >
                                        Download
                                    </button>
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No doctor's form submitted</p>
                            )}
                        </div>
                    </div>

                    {/* Admin Actions */}
                    < div className="bg-[#B9E4FE] rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4 text-black">Actions</h2>
                        <div className="flex space-x-4">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                                Reject Application
                            </button>
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                onClick={handleAcceptRequest}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Accept & Request Meeting"}
                            </button>
                        </div>
                    </div>
                </main >

                {/* Right Sidebar */}
                < aside className="w-64 bg-[#072D4A]/90 p-6" >
                    <div className="bg-[#007ECA] rounded-xl p-4 h-1/2 mb-6">
                        <h2 className="text-xl font-bold">Announcements</h2>
                    </div>
                    <div className="bg-[#007ECA] rounded-xl p-4 h-2/5">
                        <h2 className="text-xl font-bold">Meetings</h2>
                    </div>
                </aside >
            </div >
        );
    }

    else if (student.status === "Pending") {
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
                        <NavLink to="/admin-students" className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"> Students </NavLink>
                        <NavLink to="/admin-approved" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Approved </NavLink>
                        <NavLink to="/admin-pending" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Pending </NavLink>
                        <NavLink to="/admin-applied" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Applied </NavLink>
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
                    <h1 className="text-2xl font-bold mb-6 text-black">Student Learning Plan</h1>

                    {/* Student Header */}
                    <div className="flex items-center space-x-4 mb-4">
                        <img
                            src={student.image || "https://via.placeholder.com/48"}
                            alt={`${student.name}'s avatar`}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-xl font-bold text-black">{student.name}</h2>
                            <p className="text-sm text-black">ID: <a className="font-bold">{student.id}</a></p>
                            <p className="text-sm text-black">Faculty: <a className="font-bold">{student.faculty}</a></p>
                            <p className="text-sm text-black mb-1">Disability: <a className="font-bold">{student.disability}</a></p>
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
                            >{student.status}
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#072D4A] rounded-xl p-4 mb-6 shadow-lg">
                        <div className="flex justify-between items-center">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-[#007ECA] rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-[#B9E4FE] mb-6 rounded-xl shadow-lg">
                        <h1 className="text-2xl font-bold p-4 text-black">Academic Support</h1>

                        <div className="grid grid-cols-4 text-center bg-[#007ECA] text-white text-lg font-bold py-2 rounded-t-lg m-0">
                            <p>Type of Support</p>
                            <p>Needed</p>
                            <p>Not Needed</p>
                            <p>Courses</p>
                        </div>

                        <form>
                            {learningPlan["Teaching Support"].map((support, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-4 h-14 items-center text-center"
                                >
                                    {/* Support Item */}
                                    <div className="bg-[#1270B0]/60 h-full flex items-center justify-center">
                                        <p>{support.item}</p>
                                    </div>

                                    {/* Yes Radio Button */}
                                    <div className="flex justify-center">
                                        {typeof support.value === "boolean" ? (
                                            <div>
                                                <input
                                                    type="radio"
                                                    id={`support-1-${index}-yes`}
                                                    name={`support-1-${index}`}
                                                    value="yes"
                                                    checked={support.value === true}
                                                    onChange={() => handleSupportChange("Teaching Support", index, true)}
                                                    className="hidden peer"
                                                    required
                                                />
                                                <label
                                                    htmlFor={`support-1-${index}-yes`}
                                                    className={`inline-flex items-center justify-between h-10 p-5 text-[#007ECA] border border-[#007ECA]/20 rounded-xl cursor-pointer dark:hover:text-[#007ECA]/80 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-[#007ECA] peer-checked:text-white hover:text-[#007ECA] hover:bg-[#007ECA]/10 dark:text-[#007ECA] dark:bg-gray-800 dark:hover:bg-[#007ECA]/20
                                                    ${support.value === true
                                                            ? "bg-[#007ECA] text-white"
                                                            : "hover:bg-[#007ECA]/10 hover:text-[#007ECA]"
                                                        }`}
                                                >
                                                    <div className="block">
                                                        <div className="w-10 text-md text-white font-semibold">Yes</div>
                                                    </div>
                                                    <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l3 3 7-7" /></svg>
                                                </label>
                                            </div>
                                        ) : (
                                            <input
                                                type="text"
                                                value={support.value}
                                                onChange={(e) =>
                                                    handleSupportChange("Teaching Support", index, e.target.value)
                                                }
                                                placeholder="Time needed"
                                                className="rounded-xl h-10 w-28 text-center px-2 py-1 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#007ECA] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none"
                                            />
                                        )}
                                    </div>

                                    {/* No Radio Button */}
                                    <div className="flex justify-center">
                                        <input
                                            type="radio"
                                            id={`support-1-${index}-no`}
                                            name={`support-1-${index}`}
                                            value="no"
                                            checked={support.value === false}
                                            onChange={() => handleSupportChange("Teaching Support", index, false)}
                                            className="hidden peer"
                                            required
                                        />
                                        <label
                                            htmlFor={`support-1-${index}-no`}
                                            className={`inline-flex items-center justify-between h-10 p-5 text-[#007ECA] border border-[#007ECA]/20 rounded-xl cursor-pointer dark:hover:text-[#007ECA]/80 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-[#007ECA] peer-checked:text-white hover:text-[#007ECA] hover:bg-[#007ECA]/10 dark:text-[#007ECA] dark:bg-gray-800 dark:hover:bg-[#007ECA]/20
    ${support.value === false
                                                    ? "bg-[#007ECA] text-white"
                                                    : "hover:bg-[#007ECA]/10 hover:text-[#007ECA]"
                                                }`}
                                        >
                                            <div className="block">
                                                <div className="w-10 text-md text-white font-semibold">No</div>
                                            </div>
                                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L13 13M13 1L1 13" /> </svg>
                                        </label>
                                    </div>

                                    {/* Subject Dropdown */}
                                    <div className="relative flex justify-center">
                                        <button
                                            type="button"
                                            onClick={() => toggleDropdown("Teaching Support", index)}
                                            className="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#007ECA] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-blue-700 dark:focus:ring-[#007ECA]"
                                        >
                                            Applies To
                                            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /> </svg>
                                        </button>

                                        {dropdownOpen[`Teaching Support-${index}`] && (
                                            <div className="absolute z-10 mt-12 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                                                    {student.subjects.map((subject, subjIndex) => (
                                                        <li key={subjIndex}>
                                                            <div className="flex items-center">
                                                                <input
                                                                    id={`checkbox-item-Teaching Support-${index}-${subjIndex}`}
                                                                    type="checkbox"
                                                                    value={subject}
                                                                    checked={support.subject.includes(subject)}
                                                                    onChange={() => handleSubjectCheckboxChange("Teaching Support", index, subject)}
                                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-[#007ECA] dark:focus:ring-[#007ECA] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                                />
                                                                <label
                                                                    htmlFor={`checkbox-item-Teaching Support-${index}-${subjIndex}`}
                                                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                >
                                                                    {subject}
                                                                </label>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </form>
                    </div>

                    {/* Form Section */}
                    <div className="bg-[#B9E4FE] mb-6 rounded-xl shadow-lg">
                        <h1 className="text-2xl font-bold p-4 text-black">Exam Support</h1>

                        <div className="grid grid-cols-4 text-center bg-[#007ECA] text-white text-lg font-bold py-2 rounded-t-lg m-0">
                            <p>Type of Support</p>
                            <p>Needed</p>
                            <p>Not Needed</p>
                            <p>Courses</p>
                        </div>

                        <form>
                            {learningPlan["Exam Support"].map((support, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-4 h-14 items-center text-center"
                                >
                                    {/* Support Item */}
                                    <div className="bg-[#1270B0]/60 h-full flex items-center justify-center">
                                        <p>{support.item}</p>
                                    </div>

                                    {/* Yes Radio Button */}
                                    <div className="flex justify-center">
                                        {typeof support.value === "boolean" ? (
                                            <div>
                                                <input
                                                    type="radio"
                                                    id={`support-0-${index}-yes`}
                                                    name={`support-0-${index}`}
                                                    value="yes"
                                                    checked={support.value === true}
                                                    onChange={() => handleSupportChange("Exam Support", index, true)}
                                                    className="hidden peer"
                                                    required
                                                />
                                                <label
                                                    htmlFor={`support-1-${index}-yes`}
                                                    className={`inline-flex items-center justify-between h-10 p-5 text-[#007ECA] border border-[#007ECA]/20 rounded-xl cursor-pointer dark:hover:text-[#007ECA]/80 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-[#007ECA] peer-checked:text-white hover:text-[#007ECA] hover:bg-[#007ECA]/10 dark:text-[#007ECA] dark:bg-gray-800 dark:hover:bg-[#007ECA]/20
                                                    ${support.value === true
                                                            ? "bg-[#007ECA] text-white"
                                                            : "hover:bg-[#007ECA]/10 hover:text-[#007ECA]"
                                                        }`}
                                                >
                                                    <div className="block">
                                                        <div className="w-10 text-md text-white font-semibold">Yes</div>
                                                    </div>
                                                    <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l3 3 7-7" /></svg>
                                                </label>
                                            </div>
                                        ) : (
                                            <input
                                                type="text"
                                                value={support.value}
                                                onChange={(e) =>
                                                    handleSupportChange("Exam Support", index, e.target.value)
                                                }
                                                placeholder="Time needed"
                                                className="rounded-xl h-10 w-28 text-center px-2 py-1 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#007ECA] peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none"
                                            />
                                        )}
                                    </div>

                                    {/* No Radio Button */}
                                    <div className="flex justify-center">
                                        <input
                                            type="radio"
                                            id={`support-0-${index}-no`}
                                            name={`support-0-${index}`}
                                            value="no"
                                            checked={support.value === false}
                                            onChange={() => handleSupportChange("Exam Support", index, false)}
                                            className="hidden peer"
                                            required
                                        />
                                        <label
                                            htmlFor={`support-1-${index}-no`}
                                            className={`inline-flex items-center justify-between h-10 p-5 text-[#007ECA] border border-[#007ECA]/20 rounded-xl cursor-pointer dark:hover:text-[#007ECA]/80 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-[#007ECA] peer-checked:text-white hover:text-[#007ECA] hover:bg-[#007ECA]/10 dark:text-[#007ECA] dark:bg-gray-800 dark:hover:bg-[#007ECA]/20
    ${support.value === false
                                                    ? "bg-[#007ECA] text-white"
                                                    : "hover:bg-[#007ECA]/10 hover:text-[#007ECA]"
                                                }`}
                                        >
                                            <div className="block">
                                                <div className="w-10 text-white text-md font-semibold">No</div>
                                            </div>
                                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L13 13M13 1L1 13" /> </svg>
                                        </label>
                                    </div>

                                    {/* Subject Dropdown */}
                                    <div className="relative flex justify-center">
                                        <button
                                            type="button"
                                            onClick={() => toggleDropdown("Exam Support", index)}
                                            className="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#007ECA] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-blue-700 dark:focus:ring-[#007ECA]"
                                        >
                                            Applies To
                                            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /> </svg>
                                        </button>

                                        {dropdownOpen[`Exam Support-${index}`] && (
                                            <div className="absolute z-10 mt-12 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                                                    {student.subjects.map((subject, subjIndex) => (
                                                        <li key={subjIndex}>
                                                            <div className="flex items-center">
                                                                <input
                                                                    id={`checkbox-item-Exam Support-${index}-${subjIndex}`}
                                                                    type="checkbox"
                                                                    value={subject}
                                                                    checked={support.subject.includes(subject)}
                                                                    onChange={() => handleSubjectCheckboxChange("Exam Support", index, subject)}
                                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-[#007ECA] dark:focus:ring-[#007ECA] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                                />
                                                                <label
                                                                    htmlFor={`checkbox-item-Exam Support-${index}-${subjIndex}`}
                                                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                >
                                                                    {subject}
                                                                </label>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </form>
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
    }

    if (student.status === "Approved") {
        return (
            <div className="flex min-h-screen bg-gray-900 text-white" >
                {/* Sidebar */}
                < aside className="w-64 bg-[#072D4A]/90 flex flex-col" >
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
                        <NavLink to="/admin-students" className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"> Students </NavLink>
                        <NavLink to="/admin-approved" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Approved </NavLink>
                        <NavLink to="/admin-pending" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Pending </NavLink>
                        <NavLink to="/admin-applied" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Applied </NavLink>
                        <NavLink to="/admin-announcements" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Announcements </NavLink>
                    </nav>

                    <div className="mt-auto p-6">
                        <button className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                            Logout
                        </button>
                    </div>
                </aside >

                {/* Main Content */}
                < main className="flex-1 bg-blue-100 p-8" >
                    <h1 className="text-2xl font-bold mb-6 text-black">Approved Student</h1>

                    {/* Student Header */}
                    <div className="flex items-center space-x-4 mb-4">
                        <img
                            src={student.image || "https://via.placeholder.com/48"}
                            alt={`${student.name}'s avatar`}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-xl font-bold text-black">{student.name}</h2>
                            <p className="text-sm text-black">ID: <span className="font-bold">{student.id}</span></p>
                            <p className="text-sm text-black">Faculty: <span className="font-bold">{student.faculty}</span></p>
                            <p className="text-sm text-black mb-1">Disability: <a className="font-bold">{student.disability}</a></p>
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
                            >{student.status}
                            </span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#072D4A] rounded-xl p-4 mb-6 shadow-lg">
                        <div className="flex justify-between items-center">
                            <div className="w-6 h-6 bg-[#007ECA] rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                            <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Student Details */}
                    <div className="bg-[#B9E4FE] mb-6 rounded-xl shadow-lg p-6">
                        <h1 className="text-2xl font-bold mb-4 text-black">Student Details</h1>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">Student ID</p>
                                    <p className="font-semibold text-black">{student.id}</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">First Name</p>
                                    <p className="font-semibold text-black">{student.name.split(" ")[0]}</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">Last Name</p>
                                    <p className="font-semibold text-black">{student.name.split(" ")[1]}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">Date of Birth</p>
                                    <p className="font-semibold text-black">{new Date(student.dob).toLocaleDateString()}</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">School</p>
                                    <p className="font-semibold text-black">{student.faculty}</p>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-500">Graduation Year</p>
                                    <p className="font-semibold text-black">{student.graduationYear}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        {/* Medical Reports */}
                        <div className="bg-[#B9E4FE] rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold mb-4 text-black">Medical Reports</h2>

                            {student.medicalReports && student.medicalReports.length > 0 ? (
                                <div className="space-y-3">
                                    {student.medicalReports.map((report, index) => (
                                        <div key={index} className="bg-white p-3 rounded-lg shadow flex justify-between items-center">
                                            <span className="text-black font-medium">{report.name || `Medical Report ${index + 1}`}</span>
                                            <button
                                                className="bg-[#007ECA] text-white px-4 py-1 rounded-lg hover:bg-[#007ECA]/80 transition-colors"
                                                onClick={() => window.open(report.url || '#')}
                                            >
                                                Download
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No medical reports submitted</p>
                            )}
                        </div>

                        {/* Doctor's Form */}
                        <div className="bg-[#B9E4FE] rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-bold mb-4 text-black">Doctor's Form</h2>

                            {student.doctorsForm ? (
                                <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                                    <span className="text-black font-medium">{student.doctorsForm.name || "Doctor's Form"}</span>
                                    <button
                                        className="bg-[#007ECA] text-white px-4 py-1 rounded-lg hover:bg-[#007ECA]/80 transition-colors"
                                        onClick={() => window.open(student.doctorsForm.url || '#')}
                                    >
                                        Download
                                    </button>
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No doctor's form submitted</p>
                            )}
                        </div>
                    </div>

                    {/* Admin Actions */}
                    <div className="bg-[#B9E4FE] mb-6 rounded-xl shadow-lg p-6">
                    <h1 className="text-2xl font-bold mb-4 text-black">Send Feedback</h1>
                    
                    <h4 className="text-gray-700 font-bold">From:</h4>
                    <input id="fromInput" type="text" className="w-[80%] text-black rounded-md p-2 shadow-sm" />
                    <h4 className="text-gray-700 mt-4 font-bold">Message:</h4>
                    <textarea id="messageText" cols="30" rows="5" className="w-[80%] text-black rounded-md p-2 shadow-sm"></textarea>
                    <br/>
                    <button onClick={()=>sendFeedback(document.getElementById("fromInput").value, document.getElementById("messageText").value, student.id)} className="w-28 h-8 bg-green-600 mt-2 text-white rounded-md shadow-sm">Send</button>
                    </div>
                </main >

                {/* Right Sidebar */}
                < aside className="w-64 bg-[#072D4A]/90 p-6" >
                    <div className="bg-[#007ECA] rounded-xl p-4 h-1/2 mb-6">
                        <h2 className="text-xl font-bold">Announcements</h2>
                    </div>
                    <div className="bg-[#007ECA] rounded-xl p-4 h-2/5">
                        <h2 className="text-xl font-bold">Meetings</h2>
                    </div>
                </aside >
            </div >
        );
    }
};

async function sendFeedback(from, message, to)
{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateFormat = `${day}-${month}-${year}`;
    const feedback = {
        "from":from,
        "to":to,
        "date": dateFormat,
        "message": message
    };

    try {
        const response = await axios.post("http://localhost:4000/feedback", feedback, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log("Data sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
}

export default AdminLearningPlan;
