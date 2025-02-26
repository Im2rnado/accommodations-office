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
                        className="block py-2 px-4  text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Forms
                    </a>
                    <a
                        href="/StudentRequests"
                        className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        Requests
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
            <h1 className="mt-10 ml-4 mr-0  text-4xl font-bold text-[#072D4A]/90">Requests</h1>

            {/* Content */}
            <div className="flex mt-10">
            <div className="w-3/5  ml-4 m-auto bg-[#007ECA] rounded-xl p-6 text-center">
                <b className="text-5xl block">Requests Form</b>

                <form method="#" action="#" className="mt-6">
                <div className="mb-4">
                    <label htmlFor="TypeOfRequest" className="text-2xl font-bold block text-left">
                        Type of Request:
                    </label>
                    <select
                        id="TypeOfRequest"
                        name="TypeOfRequest"
                        className="mt-2 block w-full max-w-md mx-auto font-bold text-black rounded-xl p-2 text-center"
                        >
                            <option>Mobility Assistance</option>
                            <option>Medication Storage</option>
                            <option>Personal Caregiver Tag-Along Request</option>
                            <option>Extra Time on Exam</option>
                            <option>Assignment Extension</option>
                            <option>Note Taker Request</option>
                            <option>Mental Support</option>
                            <option>Technology Request</option>
                        </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="details" className="text-2xl font-bold block text-left">
                        Relevant details:
                    </label>
                    <textarea
                        id="details"
                        name="details"
                        className="mt-2 block w-full max-w-md mx-auto leading-normal rounded-xl font-bold p-3 h-40 text-black"
                        placeholder="Add your details here..."
                    />
                </div>

                <button
                    type="submit"
                    className="bg-white text-sky-700 font-bold py-2 px-6 rounded-xl hover:bg-gray-200 transition"
                >
                    Submit Request
                </button>
                </form>
            </div>
            <div className=" h-[100%] m-auto ml-0 w-[22%]  bg-[#007ECA] rounded-xl p-6 text-center"></div>
          </div>
        </div>
        </div>
  );
}
export default StudentRequests;