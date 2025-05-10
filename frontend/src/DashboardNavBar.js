import React from "react";
import { useNavigate } from "react-router-dom";
function DashboardNavBar()
{
    const studentName = localStorage.getItem('studentName');
    const navigate = useNavigate();
    
    return(
<aside className="w-64 bg-blue-950 flex flex-col">
                <div className="p-6">
                    <h1 className="text-lg font-bold mb-4" tabIndex="0" role="Website title" aria-label="ESLSCA Accomodation Website">Accommodation's Office</h1>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                        <div>
                            <p className="font-semibold">Welcome Back,</p>
                            <p className="text-sm">{studentName || 'Student'}</p>
                        </div>
                    </div>
                </div>
                <nav tabIndex="1" role="Navigation bar" aria-label="Links to each page, you can navigate vertically through the arrow keys" className="m-2 space-y-4">
                    <a
                        href="/Dashboard"
                        className="block py-2 px-4 rounded-xl text-white hover:bg-[#007ECA]/60"
                    >
                        <i class="fa-solid fa-gauge"></i> Dashboard
                    </a>
                    <a
                        href="/StudentForm"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        <i class="fa-solid fa-file-invoice"></i> Forms
                    </a>
                    <a
                        href="/StudentPlan"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        <i class="fa-solid fa-file-pen"></i> Plans
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        <i class="fa-solid fa-comment"></i> Feedback
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        <i class="fa-solid fa-calendar-days"></i> Calendar
                    </a>
                    <a
                        href="./StudentPDF"
                        className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                    >
                        <i class="fa-solid fa-file-pdf"></i> Convert PDF
                    </a>
                </nav>
                <div className="mt-auto p-6">
                    <button
                        className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"
                        onClick={() => {
                            localStorage.removeItem('studentId');
                            localStorage.removeItem('studentName');
                            localStorage.removeItem('studentEmail');
                            navigate('/login');
                        }}
                    >
                        Logout
                    </button>
                </div>
            </aside>
    );
}

export default DashboardNavBar;