import React, { useState } from 'react';

const Apply = () => {
    const [studentId, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Student ID:', studentId);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Date of Birth:', dateOfBirth);
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#072D4A]/90 text-white background-image">
            <div className="w-full max-w-lg p-6 bg-[#072D4A]/60 rounded-3xl shadow-2xl">
                <div className="flex mb-4">
                    <button className="text-white mr-20">&lt; Back</button>
                    <h1 className="text-3xl font-bold text-center">Personal Details</h1>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="studentId"
                            className="block text-sm font-medium text-white"
                        >
                            Student ID Number
                        </label>
                        <input
                            type="text"
                            id="studentId"
                            placeholder="Enter ID Number"
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-blue-600 rounded-md focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-white"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-blue-600 rounded-md focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-white"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-blue-600 rounded-md focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="dob"
                            className="block text-sm font-medium text-white"
                        >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dob"
                            placeholder="Enter Date of Birth"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-blue-600 rounded-md focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="w-full px-4 py-2 bg-[#072D4A]/70 text-white border border-blue-600 rounded-md text-md font-medium hover:bg-blue-800"
                        >
                            Medical Reports
                            <p className="text-xs mt-1">Please upload medical reports</p>
                        </button>
                        <button
                            type="button"
                            className="w-full px-4 py-2 bg-[#072D4A]/70 text-white border border-blue-600 rounded-md text-md font-medium hover:bg-blue-800"
                        >
                            Doctor’s Form
                            <p className="text-xs mt-1">
                                Please print this form and provide to your Doctor
                            </p>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-800 hover:bg-blue-500 text-white rounded-lg font-medium text-lg"
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
