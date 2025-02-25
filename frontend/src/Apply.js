import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const Apply = () => {
    const navigate = useNavigate();
    const [studentId, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [medicalReports, setMedicalReports] = useState([]);
    const [doctorsForm, setDoctorsForm] = useState(null);

    // References for file inputs
    const medicalReportRef = useRef();
    const doctorsFormRef = useRef();

    const handleMedicalReportChange = (e) => {
        const files = Array.from(e.target.files);
        setMedicalReports(files);
    };

    const handleDoctorsFormChange = (e) => {
        setDoctorsForm(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Student ID:', studentId);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Date of Birth:', dateOfBirth);
        console.log('Medical Reports:', medicalReports);
        console.log('Doctor\'s Form:', doctorsForm);

        // Here you would typically send the files to your server
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#072D4A]/90 text-white background-image">
            <div className="w-full max-w-lg p-6 bg-[#072D4A]/60 rounded-3xl shadow-2xl">
                <div className="flex mb-4">
                    <NavLink to="/login" className="text-white mr-20 mt-2">&lt; Back</NavLink>
                    <h1 className="text-3xl font-bold text-center">Personal Details</h1>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="studentId"
                            className="block text-base font-medium text-white"
                        >
                            Student ID Number
                        </label>
                        <input
                            type="text"
                            id="studentId"
                            placeholder="Enter ID Number"
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-base font-medium text-white"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-base font-medium text-white"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="dob"
                            className="block text-base font-medium text-white"
                        >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"
                            placeholder="Enter Date of Birth"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Medical Reports Upload */}
                        <div
                            onClick={() => medicalReportRef.current.click()}
                            className="cursor-pointer"
                        >
                            <div className="bg-[#0A4770] text-center rounded-lg shadow-lg w-[100%] hover:bg-[#0A4770]/80 transition-colors">
                                <div className="bg-[#35B7FB] px-4 py-2 rounded-lg w-full">
                                    <h1 className="text-xl font-semibold text-black">Medical Reports</h1>
                                </div>
                                <div className="flex items-center p-2">
                                    <span className='text-white text-sm'>
                                        {medicalReports.length > 0
                                            ? `${medicalReports.length} files selected`
                                            : "Click to upload medical reports"}
                                    </span>
                                </div>
                            </div>
                            <input
                                type="file"
                                multiple
                                ref={medicalReportRef}
                                onChange={handleMedicalReportChange}
                                className="hidden"
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />
                        </div>

                        {/* Doctor's Form Upload */}
                        <div
                            onClick={() => doctorsFormRef.current.click()}
                            className="cursor-pointer"
                        >
                            <div className="bg-[#0A4770] text-center rounded-lg shadow-lg w-[100%] hover:bg-[#0A4770]/80 transition-colors">
                                <div className="bg-[#35B7FB] px-4 py-2 rounded-lg w-full">
                                    <h1 className="text-xl font-semibold text-black">Doctor's Form</h1>
                                </div>
                                <div className="flex items-center p-2">
                                    <span className='text-white text-sm'>
                                        {doctorsForm
                                            ? doctorsForm.name
                                            : "Click to upload doctor's form"}
                                    </span>
                                </div>
                            </div>
                            <input
                                type="file"
                                ref={doctorsFormRef}
                                onChange={handleDoctorsFormChange}
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#007ECA] hover:bg-[#0A4770] text-white rounded-lg font-medium text-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Apply;
