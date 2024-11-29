import React from "react";

const Dashboard = () => {
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
                            <p className="text-sm">Student's Name</p>
                        </div>
                    </div>
                </div>
                <nav className="mt-8 space-y-4">
                    <a
                        href="#"
                        className="block py-2 px-4 bg-[#007ECA]/70 rounded-xl text-white hover:bg-[#007ECA]/60"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Forms
                    </a>
                    <a
                        href="#"
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
                </nav>
                <div className="mt-auto p-6">
                    <button className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Dashboard */}
            <main className="flex-1 bg-blue-100 p-8">
                <h1 className="text-2xl font-bold mb-6 text-black">Dashboard</h1>
                <div className="grid grid-cols-3 gap-6">
                    {/* Cards */}
                    <div className="col-span-2 bg-[#007ECA] rounded-xl p-4 h-48">
                        <h2 className="text-lg font-semibold">Current Learning Plan</h2>
                    </div>
                    <div className="bg-[#007ECA] rounded-xl p-4">
                        <h2 className="text-lg font-semibold">Pending Forms</h2>
                    </div>

                    {/* Calendar */}
                    <div className="col-span-3 bg-[#B9E4FE] rounded-xl p-6 text-black">
                        <h2 className="text-lg font-semibold mb-4">November</h2>
                        <div className="grid grid-cols-7 text-center">
                            <span>Mo</span>
                            <span>Tu</span>
                            <span>We</span>
                            <span>Th</span>
                            <span>Fr</span>
                            <span>Sa</span>
                            <span>Su</span>
                            {[...Array(30).keys()].map((day) => (
                                <div
                                    key={day}
                                    className={`py-2 rounded ${day + 1 === 23 ? "bg-[#072D4A]/90 text-white" : ""
                                        }`}
                                >
                                    {day + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Cards */}
                    <div className="bg-[#007ECA] rounded-xl p-4 h-48">
                        <h2 className="text-lg font-semibold">Approved Forms</h2>
                    </div>
                    <div className="bg-[#007ECA] rounded-xl p-4">
                        <h2 className="text-lg font-semibold">Previous Learning Plan</h2>
                    </div>
                    <div className="bg-orange-500 rounded-xl p-4">
                        <h2 className="text-lg font-semibold">Feedback</h2>
                    </div>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 p-6">
                <div className="bg-[#007ECA] rounded-xl h-1/2 mb-6"></div>
                <div className="bg-[#007ECA] rounded-xl h-2/5"></div>
            </aside>
        </div>
    );
};

export default Dashboard;
