import React from "react";
import NavbarLanding from "./NavbarLanding";
import E61884 from "./assets/E61884.jpg";
import IMG_0504 from "./assets/IMG_0504-b.jpg";
import wheelchair_ramps from "./assets/wheelchair-ramps.jpg";

function Homepage() {
    return (
        <div className="w-full h-[100%] min-h-screen bg-white">

            <NavbarLanding />

            <section style={{ backgroundImage: `url(${E61884})` }} className="w-full h-[600px] bg-center bg-cover 
            relative flex justify-center items-center">
                <div className="h-32 pl-10 pr-10 bg-blue-900 rounded-lg m-auto mr-10 mb-10 flex justify-center items-center">
                    <a href="./ApplyLandingPage" className="text-white text-3xl mr-2 ml-2 flex justify-center items-center transition-all
                    pr-10 pl-10 h-14 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 hover:font-bold"><i class="fa-solid fa-graduation-cap"></i>Apply</a>

                    <a href="./login" className="text-white text-3xl mr-2 ml-2 flex justify-center items-center transition-all
                    pr-10 pl-10 h-14 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 hover:font-bold"><i class="fa-solid fa-user mr-4"></i>Login</a>
                </div>
            </section>

            <section className="w-full h-[600px] bg-white p-8 flex flex-col justify-start items-start">
                <h1 className="text-4xl font-bold text-black before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-blue-900 before:z-10 before:left-0 before:top-12 before:rounded-sm">About the Office</h1>

                <div className="w-full h-[90%] m-auto flex">
                    <div className=" w-[50%] flex justify-center items-center flex-col">
                        <p className="w-full h-[90%] text-black text-2xl">
                            Disabilities vary widely and can be physical, mental, visible, or invisible,
                            affecting major life activities in different ways. Since there is no
                            exhaustive list, our office encourages students facing challenges due
                            to an impairment to reach out so we can identify appropriate accommodations.
                            <br />
                            <br />
                            This department will ensure students with disabilities
                            have comprehensive support, advocacy, and access to
                            academic and extracurricular opportunities.
                        </p>


                        <a href="./about" className="text-blue-900 w-[40%] text-3xl flex justify-center items-center transition-all
                            pr-5 pl-5 h-14 border-2 border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white hover:font-bold">See more</a>

                    </div>
                    <div style={{ backgroundImage: `url(${IMG_0504})` }} className="w-[47%] h-[100%] mr-0 ml-5 bg-cover rounded-lg"></div>
                </div>
            </section>

            <section className="w-full h-[600px] bg-gradient-to-r from-blue-900 to-blue-950 p-8 flex flex-col justify-end items-end">
                <h1 className="text-4xl font-bold text-white before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-white before:z-10 before:left-0 before:top-12 before:rounded-sm" >Accommodations Provided</h1>

                <div className="w-full h-[90%] m-auto flex flex-row-reverse">
                    <div className=" w-[50%] flex justify-center items-center flex-col">
                        <p className="w-full h-[90%] text-white text-2xl text-right">
                            The Accommodations Office provides students with many things insuring their comfortability
                            and ease of accessability during their academic journey.
                            <br />
                            <br />
                            This includes assistive Technologies such as screen readers, voice recognition software, FM systems, and adaptive tools.
                            <br />
                            <br />
                            In addition to accessabile ramps, elevators, and tactile pathways around the campus
                        </p>

                        <a href="./AccomodationsProvided" className="text-white text-3xl flex justify-center items-center transition-all    
                        pr-24 pl-24 h-14 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 hover:font-bold">See all accommodations</a>
                    </div>
                    <div style={{ backgroundImage: `url(${wheelchair_ramps})` }}
                        className="w-[47%] h-[100%] mr-5 ml-0 bg-cover rounded-lg"></div>
                </div>
            </section>
            <section className="w-full h-[150px] bg-gradient-to-r from-gray-900 to-gray-950 p-8 flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold text-white">Links</h1>
                <div className="flex text-white">
                    <a href="/Homepage" className="text-blue-500 mr-4">Home</a>
                    <a href="/AccessabilityTools" className="text-blue-500 mr-4">Accessability Tools</a>
                    <a href="/ApplyLandingPage" className="text-blue-500 mr-4">Policy</a>
                    <a href="/Contact" className="text-blue-500 mr-4">Contact Us</a>
                </div>
            </section>
        </div>
    );
}

export default Homepage;