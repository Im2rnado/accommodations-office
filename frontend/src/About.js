import React from "react";
import NavbarLanding from "./NavbarLanding";
function Policy()
{
    return(
        <div className="w-full h-[100%] min-h-screen bg-white">

            <NavbarLanding/>

            <section className="w-full h-[400px] bg-[url('https://eslsca.edu.eg/wp-content/uploads/2023/03/E61884.jpg')] bg-center bg-cover 
            relative flex justify-center items-center after:w-full after:h-[400px] after:bg-black after:opacity-60">
                <h1 className="text-8xl text-white font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10">About</h1>
            </section>

            <section className="w-full h-[300px] bg-white p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-black before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-blue-900 before:z-10 before:left-0 before:top-12 before:rounded-sm">Vision & Mission</h1>

            <ul className="list-disc text-2xl ml-10">
                <li><strong>Vision: </strong>To foster an inclusive and accessible educational environment where students of all abilities can fully participate, excel, and achieve their academic potential.</li>
                <li><strong>Mission: </strong>To provide tailored support, reasonable accommodations, and advocacy, ensuring that students with disabilities have equitable access to all aspects of university life and a supportive learning experience.</li>
            </ul>
            </section>

            <section className="w-full h-[400px] bg-gradient-to-r from-blue-900 to-blue-950 p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-white before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-white before:z-10 before:left-0 before:top-12 before:rounded-sm">Objective</h1>

                <ul className="list-disc text-2xl ml-10 text-white">
                    <li>Ensure compliance with national and international disability education laws and institutional policies.</li>
                    <li>Develop and implement policies and regulations that support equitable access and inclusion for students with disabilities in the university.</li>
                    <li>Foster disability awareness and inclusion through training programs for faculty, staff, and students.</li>
                    <li>Offer comprehensive support services, including counseling, academic assistance, and assistive technology.</li>
                    <li>Promote an inclusive curriculum by advocating for adaptive teaching strategies that address diverse learning needs.</li>
                    <li>Enhance campus accessibility by providing necessary accommodations in both physical and digital environments</li>
                </ul>
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

export default Policy;