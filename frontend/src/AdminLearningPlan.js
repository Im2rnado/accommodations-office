/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const EditStudentAccommodations = () => {
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
                            <p className="text-sm">Staff Name</p>
                        </div>
                    </div>
                </div>
                <nav className="m-2 space-y-4">
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 bg-[#007ECA]/70 rounded-xl text-white hover:bg-[#007ECA]/60"
                    >
                        Students
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Approved
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Processing
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Applied
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Meetings
                    </a>
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
                <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold text-black">Ahmed Hatem</h2>
                        <p className="text-sm text-black">232400260</p>
                        <p className="text-sm text-black">Computing & Digital Tech</p>
                        <p className="text-sm text-black">Autistic</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-[#072D4A] rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                        <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                        <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="flex-1 h-1 bg-gray-400 mx-2"></div>
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-[#B9E4FE] mb-6 rounded-xl">
                    <h1 className="text-2xl font-bold p-4 text-black">Exam Support</h1>

                    <div className="grid grid-cols-3 text-center bg-[#007ECA] text-white text-lg font-bold py-2 rounded-t-lg m-0">
                        <p>Type of Support</p>
                        <p>Needed</p>
                        <p>Not Needed</p>
                    </div>

                    <form>
                        {[
                            "Extra time in exams",
                            "Rest break time in exams",
                            "Use of university PC in exams",
                            "Exam NOT in a large hall",
                            "Exam taken alone",
                            "Exam reader",
                            "Exam scribe",
                            "Use of assistive software in exams",
                            "One to one tutoring",
                            "Extra time for assignment submission",
                        ].map((support, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 h-14 items-center text-center"
                            >
                                <div className="bg-[#1270B0]/60 h-full flex items-center justify-center">
                                    <p>{support}</p>
                                </div>
                                <div className="flex justify-center">
                                    {!support.includes("time") && (
                                        <div>
                                            <input
                                                type="radio"
                                                id={`support-${index}-needed`}
                                                name={`support-${index}`}
                                                value={`support-${index}-needed`}
                                                className="hidden peer"
                                                required
                                            />
                                            <label
                                                htmlFor={`support-${index}-needed`}
                                                className="inline-flex items-center justify-between h-10 p-5 text-green-500 border border-green-200 rounded-xl cursor-pointer dark:hover:text-green-300 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-green-600 peer-checked:text-green-600 hover:text-green-600 hover:bg-gray-100 dark:text-green-400 dark:bg-gray-800 dark:hover:bg-green-700"
                                            >
                                                <div className="block">
                                                    <div className="w-10 text-md font-semibold">Yes</div>
                                                </div>
                                                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l3 3 7-7" /></svg>
                                            </label>
                                        </div>
                                    )}

                                    {support.includes("time") && (
                                        <input
                                            type="text"
                                            placeholder="Time needed"
                                            className="rounded-xl h-10 w-28 text-center px-2 py-1 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none"
                                        />
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <input
                                        type="radio"
                                        id={`support-${index}-not-needed`}
                                        name={`support-${index}`}
                                        value={`support-${index}-not-needed`}
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor={`support-${index}-not-needed`}
                                        className="inline-flex items-center justify-between h-10 p-5 text-red-500 border border-red-200 rounded-xl cursor-pointer dark:hover:text-red-300 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-red-600 peer-checked:text-red-600 hover:text-red-600 hover:bg-gray-100 dark:text-red-400 dark:bg-gray-800 dark:hover:bg-red-700"
                                    >
                                        <div className="block">
                                            <div className="w-10 text-md font-semibold">No</div>
                                        </div>
                                        <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L13 13M13 1L1 13" /> </svg>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </form>
                </div>

                {/* Form Section */}
                <div className="bg-[#B9E4FE] mb-6 rounded-xl">
                    <h1 className="text-2xl font-bold p-4 text-black">Teaching Support</h1>

                    <div className="grid grid-cols-3 text-center bg-[#007ECA] text-white text-lg font-bold py-2 rounded-t-lg m-0">
                        <p>Type of Support</p>
                        <p>Needed</p>
                        <p>Not Needed</p>
                    </div>

                    <form>
                        {[
                            "Allowed to record your lectures in line with University Policy",
                            "Extensions to course work deadlines",
                            "A note taker provided for your classes",
                            "Materials in alternative formats (e.g. coloured paper or braille)",
                            "Practical support (e.g. library or lab assistance)",
                            "Assistive software (e.g. screen reading or speech recognition software)",
                            "Specialist equipment (e.g. a radio aid)",
                            "Access or mobility requirements ",
                        ].map((support, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 h-14 items-center text-center"
                            >
                                <div className="bg-[#1270B0]/60 h-full flex items-center justify-center">
                                    <p>{support}</p>
                                </div>
                                <div className="flex justify-center">
                                    {!support.includes("time") && (
                                        <div>
                                            <input
                                                type="radio"
                                                id={`support-${index}-needed`}
                                                name={`support-${index}`}
                                                value={`support-${index}-needed`}
                                                className="hidden peer"
                                                required
                                            />
                                            <label
                                                htmlFor={`support-${index}-needed`}
                                                className="inline-flex items-center justify-between h-10 p-5 text-green-500 border border-green-200 rounded-xl cursor-pointer dark:hover:text-green-300 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-green-600 peer-checked:text-green-600 hover:text-green-600 hover:bg-gray-100 dark:text-green-400 dark:bg-gray-800 dark:hover:bg-green-700"
                                            >
                                                <div className="block">
                                                    <div className="w-10 text-md font-semibold">Yes</div>
                                                </div>
                                                <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l3 3 7-7" /></svg>
                                            </label>
                                        </div>
                                    )}

                                    {support.includes("time") && (
                                        <input
                                            type="text"
                                            placeholder="Time needed"
                                            className="rounded-xl h-10 w-28 text-center px-2 py-1 dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none"
                                        />
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <input
                                        type="radio"
                                        id={`support-${index}-not-needed`}
                                        name={`support-${index}`}
                                        value={`support-${index}-not-needed`}
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor={`support-${index}-not-needed`}
                                        className="inline-flex items-center justify-between h-10 p-5 text-red-500 border border-red-200 rounded-xl cursor-pointer dark:hover:text-red-300 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-red-600 peer-checked:text-red-600 hover:text-red-600 hover:bg-gray-100 dark:text-red-400 dark:bg-gray-800 dark:hover:bg-red-700"
                                    >
                                        <div className="block">
                                            <div className="w-10 text-md font-semibold">No</div>
                                        </div>
                                        <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L13 13M13 1L1 13" /> </svg>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </form>
                </div>


                {/* Form Section */}
                <div className="bg-[#B9E4FE] mb-6 rounded-xl">
                    <h1 className="text-2xl font-bold p-4 text-black">Applies for the following courses</h1>

                    <div className="grid grid-cols-3 text-center bg-[#007ECA] text-white text-lg font-bold py-2 rounded-t-lg m-0">
                        <p>Course Name</p>
                        <p>Yes</p>
                        <p>No</p>
                    </div>

                    <form>
                        {[
                            "Database",
                            "Web",
                            "Python",
                            "Math",
                            "English",
                            "French",
                            "Operating Systems",
                            "Business",
                        ].map((course, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 h-14 items-center text-center"
                            >
                                <div className="bg-[#1270B0]/60 h-full flex items-center justify-center">
                                    <p>{course}</p>
                                </div>
                                <div className="flex justify-center">
                                    <div>
                                        <input
                                            type="radio"
                                            id={`course-${index}-needed`}
                                            name={`course-${index}`}
                                            value={`course-${index}-needed`}
                                            className="hidden peer"
                                            required
                                        />
                                        <label
                                            htmlFor={`course-${index}-needed`}
                                            className="inline-flex items-center justify-between h-10 p-5 text-green-500 border border-green-200 rounded-xl cursor-pointer dark:hover:text-green-300 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-green-600 peer-checked:text-green-600 hover:text-green-600 hover:bg-gray-100 dark:text-green-400 dark:bg-gray-800 dark:hover:bg-green-700"
                                        >
                                            <div className="block">
                                                <div className="w-10 text-md font-semibold">Yes</div>
                                            </div>
                                            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l3 3 7-7" /></svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <input
                                        type="radio"
                                        id={`course-${index}-not-needed`}
                                        name={`course-${index}`}
                                        value={`course-${index}-not-needed`}
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor={`course-${index}-not-needed`}
                                        className="inline-flex items-center justify-between h-10 p-5 text-red-500 border border-red-200 rounded-xl cursor-pointer dark:hover:text-red-300 dark:border-gray-700 dark:peer-checked:text-gray-700 peer-checked:bg-red-600 peer-checked:text-red-600 hover:text-red-600 hover:bg-gray-100 dark:text-red-400 dark:bg-gray-800 dark:hover:bg-red-700"
                                    >
                                        <div className="block">
                                            <div className="w-10 text-md font-semibold">No</div>
                                        </div>
                                        <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" > <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L13 13M13 1L1 13" /> </svg>
                                    </label>
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
};

export default EditStudentAccommodations;
