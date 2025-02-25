import React from "react";


function StudentPlan()
{
    

    return( 
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

            {/* Settings */}
        <div className="flex flex-col bg-blue-100 w-full h-screen">
            <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Learning Plans</h1>

            
        
        </div>

        </div>
    );
}


export default StudentPlan;