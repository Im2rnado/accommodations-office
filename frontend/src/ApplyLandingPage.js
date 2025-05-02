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
                <h1 className="text-8xl text-white font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10">Application</h1>
            </section>

            <section className="w-full h-[1200px] bg-white p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-black before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-blue-900 before:z-10 before:left-0 before:top-12 before:rounded-sm">Application Proccess</h1>

                <div className="flex flex-col justify-start items-start mb-5 ml-5">
                    <div className="flex justify-start items-center">
                        <div className="w-52 h-52 bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl text-white text-8xl flex
                        justify-center items-center font-bold">1</div>
                        <p className="text-2xl font-bold ml-10">
                            Visit admission office or apply online
                        </p>
                    </div>
                    <div className="w-[5px] h-24 bg-blue-900 ml-[100px] mt-5 rounded">

                    </div>
                </div>

                <div className="flex flex-col justify-start items-start mb-5 ml-5">
                    <div className="flex justify-start items-center">
                        <div className="w-52 h-52 bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl text-white text-8xl flex
                        justify-center items-center font-bold">2</div>
                        <p className="text-2xl font-bold ml-10">
                            Fill the required docuements
                        </p>
                    </div>
                    <div className="w-[5px] h-24 bg-blue-900 ml-[100px] mt-5 rounded">

                    </div>
                </div>

                <div className="flex flex-col justify-start items-start mb-5 ml-5">
                    <div className="flex justify-start items-center">
                        <div className="w-52 h-52 bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl text-white text-8xl flex
                        justify-center items-center font-bold">3</div>
                        <p className="text-2xl font-bold ml-10">
                            Submit the docuements to the office
                        </p>
                    </div>
                </div>

                <a href="./apply" className="m-auto text-white bg-blue-900 text-3xl pl-14 pr-14 pb-3 rounded-xl
                    border-4 border-white flex flex-col justify-center items-center border-solid
                    font-bold hover:bg-white hover:text-blue-900 hover:border-blue-900 transition-all hover:shadow-blue-solid"><i class="fa-solid fa-graduation-cap mb-2 text-5xl mt-4"></i>Apply now</a>

            </section>

            <section className="w-full h-[600px] bg-gradient-to-r from-blue-900 to-blue-950 p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-white before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-white before:z-10 before:left-0 before:top-12 before:rounded-sm">Supporting documents</h1>

                <ul className="list-disc text-2xl text-white ml-10">
                    <li>Must be an official document issued by a recognized medical professional or an authorized representative.</li>
                    <li>Up to date as possible (this is not as vital if it is a long-term or life-long condition).</li>
                    <li>Must provide a clear clinical or medical diagnosis of a disability that significantly affects daily activities or academic performance.</li>
                    <li>Should specify whether the disability is long-term (lasting or expected to last at least 12 months).</li>
                    <li>If the disability is temporary, the document must clearly state its expected duration.</li>
                    <li>Indicate the impact your disability has on your daily life, particularly your studies.</li>
                </ul>

                <div className="flex m-auto">
                    <a href={DisabilityForm} className="m-10 text-white text-3xl pl-10 pr-10 pb-2 rounded-lg
                    border-2 border-white flex flex-col justify-center items-center border-solid
                    font-bold hover:bg-white hover:text-blue-900 transition-all hover:shadow-gray-solid" download><i class="fa-solid fa-download mb-2 text-5xl mt-4"></i>Download Disability Evidence Form</a>

                    <a href={LearningPlan} className="m-10 text-white text-3xl pl-10 pr-10 pb-2 rounded-lg
                    border-2 border-white flex flex-col justify-center items-center border-solid
                    font-bold hover:bg-white hover:text-blue-900 transition-all hover:shadow-gray-solid" download><i class="fa-solid fa-download mb-2 text-5xl mt-4"></i>Download Learning Support Plans</a>
                </div>
                
            </section>
            
            <section className="w-full h-[150px] bg-gradient-to-r from-gray-900 to-gray-950 p-8 flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold text-white">Links</h1>
                <div className="flex text-white">
                    <a href="/Homepage" className="text-blue-500 mr-4">Home</a>
                    <a href="/AccessabilityTools" className="text-blue-500 mr-4">Accessability Tools</a>
                    <a href="/Policy" className="text-blue-500 mr-4">Policy</a>
                    <a href="/Apply" className="text-blue-500 mr-4">Apply</a>
                    <a href="/Contact" className="text-blue-500 mr-4">Contact Us</a>
                </div>
            </section>
        </div>
    );
}

export default ApplyLandingPage;