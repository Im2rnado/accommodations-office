import React from "react";
import NavbarLanding from "./NavbarLanding";
function AccommodationsProvided()
{
    return(
        <div className="w-full h-[100%] min-h-screen bg-white">

            <NavbarLanding/>

            <section className="w-full h-[400px] bg-[url('https://eslsca.edu.eg/wp-content/uploads/2023/03/E61884.jpg')] bg-center bg-cover 
            relative flex justify-center items-center after:w-full after:h-[400px] after:bg-black after:opacity-60">
                <h1 className="text-6xl text-white font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10">Accomodations Provided</h1>
            </section>

            <section className="w-full h-[600px] bg-white p-8 flex flex-col justify-start items-start">
                <h1 className="text-4xl font-bold text-black before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-blue-900 before:z-10 before:left-0 before:top-12 before:rounded-sm">Supported Services</h1>

                <div className="w-full h-[90%] m-auto flex">
                    <div className=" w-[50%] flex justify-center items-center flex-col">
                        <ul className="w-full h-[90%] text-black text-2xl">
                         <li><strong>Academic support:</strong> Personalized Learning Plans, Academic Assistance & Peer Support Programs.</li>
                         <li><strong>Mental Health Support:</strong> Regular counseling and support groups.</li>
                         <li><strong>Career Services:</strong> Tailored career guidance and internship opportunities.</li>

                        </ul>


                        

                    </div>
                    <div style={{ backgroundImage: `url(https://academic-services.providence.edu/wp-content/uploads/sites/36/2020/08/oas-banner-image-1024x467.jpg)` }} className="w-[47%] h-[100%] mr-0 ml-5 bg-cover rounded-lg"></div>
                </div>
            </section>


            <section className="w-full h-[800px] bg-gradient-to-r from-blue-900 to-blue-950 p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-white before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-white before:z-10 before:left-0 before:top-12 before:rounded-sm">Academic Accommodation Plan</h1>
            <table>
                
            </table>
            <div className="flex flex-row">
                <ul className="list-disc text-2xl ml-10 text-white">
                    <li>Receiving handouts and lecture presentations in advance.</li>
                    <li>Modifying course materials.</li>
                    <li>Class participation accommodation.</li>
                    <li>Assignment format, number of assignments, weight of assignments and deadlines.</li>
                </ul>
                <ul className="list-disc text-2xl ml-10 text-white">
                    <li>Attendance policy.</li>
                    <li>Scribe or shadow teachers.</li>
                    <li>Access to private study rooms/ exam.</li>
                    <li>Adjustments for group work or presentations. This may include presenting to a smaller audience or staff only, recording your presentation, or working in a smaller group or with people you know.</li>
                </ul>
            </div>

            <div className="flex flex-row">
                <ul className="list-disc text-2xl ml-10 text-white">
                    <li>Permission to make personal recordings of teaching sessions.</li>
                    <li>One to one session with tutors.</li>
                    <li>Online sessions.</li>
                    <li>Oral presentation accommodation.</li>
                </ul>
                <ul className="list-disc text-2xl ml-10 text-white">
                    <li>Scheduling support.</li>
                    <li>Offering some distance learning or self-study courses, however unless the course that have applied for is specifically one of these, then student will be expected to attend the course in person.</li>
                    <li>Exam arrangements: private exam room, a support worker to assist (a reader, scribe or prompter ), number of exams per day, rest breaks, exam revision guide, extra time, modifying exam format and/or modifying grading criteria.</li>
                    <li>Assistive technology sessions with our Assistive Technology Advisor (Text-to-speech/screen, magnification software, Fm system).</li>
                </ul>
            </div>
            </section>

            <section className="w-full h-[150px] bg-gradient-to-r from-gray-900 to-gray-950 p-8 flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold text-white">Links</h1>
                <div className="flex text-white">
                    <a href="/Homepage" className="text-blue-500 mr-4">Home</a>
                    <a href="/AccessabilityTools" className="text-blue-500 mr-4">Accessability Tools</a>
                    <a href="/Policy" className="text-blue-500 mr-4">Policy</a>
                    <a href="/ApplyLandingPage" className="text-blue-500 mr-4">Apply</a>
                    <a href="/Contact" className="text-blue-500 mr-4">Contact Us</a>
                </div>
            </section>
        </div>
    );
}

export default AccommodationsProvided;