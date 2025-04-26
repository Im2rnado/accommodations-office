import React from "react";
import DisabilityForm from "./assets/Disability Evidence Form.docx";
import LearningPlan from "./assets/Learning Support Plans.docx";
import NavbarLanding from "./NavbarLanding";
function ApplyLandingPage()
{
    return(
        <div className="w-full h-[100%] min-h-screen bg-white">

            <NavbarLanding/>

            <section className="w-full h-[400px] bg-[url('https://eslsca.edu.eg/wp-content/uploads/2023/03/E61884.jpg')] bg-center bg-cover 
            relative flex justify-center items-center after:w-full after:h-[400px] after:bg-black after:opacity-60">
                <h1 className="text-8xl text-white font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10">Contact Us</h1>
            </section>

            

            <section className="w-full h-[800px] bg-gradient-to-r from-blue-900 to-blue-950 p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-white before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-white before:z-10 before:left-0 before:top-12 before:rounded-sm">Contact Us</h1>

            <p className="m-auto mt-0 mb-2 text-white text-2xl">If you have any questions or need to inquire
             about the office, please feel free to contact us via email at <strong>accommodation@eslsca.com</strong> or by using the form below.
            </p>

            {/* Form */}
            <form className="w-full h-full">  
                <div className="w-[80%] m-auto mb-0 flex justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label className="text-white font-bold text-xl mb-1">Name</label>
                        <input type="text" required className="w-full p-2 text-xl rounded-lg text-blue-950" placeholder="enter your full name"/>                
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label className="text-white font-bold text-xl mb-1">Type</label>
                        <select required className="w-full p-2 text-xl rounded-lg font-bold text-blue-950">
                            <option value="inquiry" key="">Inquiry</option>
                            <option value="complaint" key="">Complaint</option>
                            <option value="suggestion" key="">Suggestion</option>
                        </select>               
                    </div>
                </div>
                <div className="flex flex-col w-[80%] m-auto mt-2 mb-0">
                    <label className="text-white font-bold text-xl mb-1">Email</label>
                    <input type="text" required className="w-full  p-2 text-xl rounded-lg text-blue-950" placeholder="example@example.com"/>
                </div>

                <div className="flex flex-col w-[80%] m-auto mt-2">
                    <label className="text-white font-bold text-xl mb-1">Message</label>
                    <textarea required cols="30" rows="10" className="w-full p-2 text-xl rounded-lg text-blue-950"
                    placeholder="enter your message here"></textarea>
                </div>

                <button className="w-[20%] pt-3 pb-3 bg-white flex justify-center
                items-center rounded-lg font-bold text-blue-700 text-2xl m-auto mb-0 mt-5 transition-all duration-200
                hover:bg-blue-700 hover:text-white">Submit<i class="fa-solid fa-paper-plane ml-2"></i></button>
            </form>
            </section>
            
            <section className="w-full h-[150px] bg-gradient-to-r from-gray-900 to-gray-950 p-8 flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold text-white">Links</h1>
                <div className="flex text-white">
                    <a href="/Homepage" className="text-blue-500 mr-4">Home</a>
                    <a href="/AccessabilityTools" className="text-blue-500 mr-4">Accessability Tools</a>
                    <a href="/Policy" className="text-blue-500 mr-4">Policy</a>
                    <a href="/Apply" className="text-blue-500 mr-4">Apply</a>
                    <a href="/contactus" className="text-blue-500 mr-4">Contact Us</a>
                </div>
            </section>
        </div>
    );
}

export default ApplyLandingPage;