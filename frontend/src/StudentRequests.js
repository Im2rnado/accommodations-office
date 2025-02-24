import React from "react";

function StudentRequests() {
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
                        href="./StudentPlan"
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
            <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Requests</h1>

            {/* Content */}
            <div className="mt-10 ml-4 mr-96 bg-sky-700 rounded-xl p-6 text-center">
                <b className="text-5xl block">Requests Form</b>

                <div className="mt-6">
                    <b className="text-2xl">Type of Request:</b>
                    <select
                        name="TypeOfRequest"
                        className="ml-3 font-bold text-black rounded-xl p-1 text-center"
                    >
                        <option>Mobility Assistance</option>
                        <option>Medication storage</option>
                        <option>Personal caregiver tag-along request</option>
                        <option>Extra time on exam</option>
                        <option>Assignment extension</option>
                        <option>Note taker request</option>
                        <option>Mental support</option>
                        <option>Technology request</option>
                    </select>
                </div>

                <div className="mt-6 text-left">
                    <b className="text-2xl">Relevant details:</b>
                    <textarea
                        className="mt-2 block leading-normal rounded-xl font-bold p-3 w-full h-40 text-black"
                        placeholder="Add your details here..."
                    />
                    <center>
                        <input type="submit" className="m-2 bg-white text-black p-1 rounded-lg " value="submit" />
                        <input type="reset" className="m-2 bg-white text-black p-1 rounded-lg " value="reset" />
                    </center>
    </div>
    </div>

        </div>
        </div>
  );
}
export default StudentRequests;