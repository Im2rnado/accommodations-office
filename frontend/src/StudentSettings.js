import React from "react";


function StudentSettings()
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
                    <a
                        href="/StudentSettings"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Settings
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
            <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Settings</h1>

            <div className="flex mt-10 ml-4">
                <div className="rounded-full w-28 h-28 bg-[#072D4A]/90"></div>
                <label name="studentName" className="m-auto ml-4 mr-0 text-xl text-black">Student First Name</label>
                <input type="text" disabled value={"Ahmed"} className="rounded-lg pl-1 m-auto mr-0 ml-3 h-10 text-black border-solid border-2 border-[#072D4A]"></input>
                <label name="studentName" className="m-auto ml-4 mr-0 text-xl text-black">Student Last Name</label>
                <input type="text" disabled value={"Mahmoud"} className="rounded-lg pl-1 m-auto ml-3 h-10 text-black border-solid border-2 border-[#072D4A]"></input>
            </div>

            <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Accessability Features</h1>
            <div className="flex mt-10 ml-4">
                <p className="m-auto ml-4 mr-0 text-2xl text-black">Font Size</p>
                <button value={"T"} className="text-lg font-bold m-auto hover:bg-[#072D4A] hover:text-white transition text-[#072D4A]/90 ml-4 mr-0 w-32 h-16 bg-white rounded-lg border-solid border-4 border-[#072D4A]">T</button>
                <button value={"T"} className="text-xl font-bold m-auto hover:bg-[#072D4A] hover:text-white transition text-[#072D4A]/90 ml-4 mr-0 w-32 h-16 bg-white rounded-lg border-solid border-4 border-[#072D4A]">T</button>
                <button value={"T"} className="text-2xl font-bold m-auto hover:bg-[#072D4A] hover:text-white transition text-[#072D4A]/90 ml-4 mr-0 w-32 h-16 bg-white rounded-lg border-solid border-4 border-[#072D4A]">T</button>
                <button value={"T"} className="text-4xl font-bold m-auto hover:bg-[#072D4A] hover:text-white transition text-[#072D4A]/90 ml-4 mr-0 w-32 h-16 bg-white rounded-lg border-solid border-4 border-[#072D4A]">T</button>
            </div>

            <div className="flex mt-10 ml-4">
                <p className="m-auto ml-4 mr-0 text-2xl text-black">Enable Animations</p>
                <input value={true} type="checkbox" className="text-lg font-bold m-auto hover:bg-[#072D4A] hover:text-white transition text-[#072D4A]/90 ml-4 mr-0 w-8 h-8 bg-white rounded-lg border-solid border-4 border-[#072D4A]"></input>
            </div>

            <div className="flex mt-10 ml-4">
                <p className="m-auto ml-4 mr-0 text-2xl text-black">Enable Animations</p>
                <input value={true} type="checkbox" className="text-lg font-bold m-auto hover:bg-[#072D4A] hover:text-white transition text-[#072D4A]/90 ml-4 mr-0 w-8 h-8 bg-white rounded-lg border-solid border-4 border-[#072D4A]"></input>
            </div>
        </div>
        </div>
    );
}


export default StudentSettings;