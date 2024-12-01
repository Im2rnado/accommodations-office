/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const StudentsPage = () => {
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
                <h1 className="text-2xl font-bold mb-6 text-black">Students</h1>

                {/* Search and Filter */}
                <div className="flex items-center justify-between mb-6 gap-[2%]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 rounded-xl w-[88%] bg-blue-200 text-black placeholder-gray-500 focus:outline-none"
                    />
                    <button className="py-2 px-4 bg-[#007ECA] text-white rounded-xl hover:bg-[#005F9E] w-[10%]">
                        Filter
                    </button>
                </div>

                {/* Student Cards */}
                <div className="grid grid-cols-3 gap-6">
                    {Array.from({ length: 15 }, (_, index) => (
                        <div
                            key={index}
                            className="bg-[#007ECA] rounded-xl p-3 flex items-start space-x-3"
                        >
                            <div className="w-11 h-11 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <div className="flex-grow min-w-0">
                                <h2 className="text-lg font-semibold text-nowrap">{`Student ${index + 1}`}</h2>
                                <p className="text-sm">{"23240020" + index}</p>
                                <p className="text-sm">{index % 2 === 0 ? "Computing" : "Business"}</p>
                            </div>
                            <div className="flex-shrink-0 self-center">
                                <span className={"text-sm " + (index % 2 === 0 ? "bg-green-600" : "bg-yellow-600") + " text-white px-2 py-1 rounded-xl font-semibold"}>
                                    {index % 2 === 0 ? "Approved" : "Pending"}
                                </span>
                            </div>
                        </div>
                    ))}
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

export default StudentsPage;