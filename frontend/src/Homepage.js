import React from "react";
import ESLSCAlogo from "./assets/ESLSCA Accommidation Office.svg";

function Homepage()
{
    return(
        <div className="w-full h-[100%] min-h-screen bg-white">
            <nav className="h-20 flex justify-center bg-gradient-to-r from-blue-900 to-blue-950">
                <img className="w-36 m-auto ml-5 mt-4" src={ESLSCAlogo} alt="" />
                <div className="flex justify-center items-center m-auto mr-3 h-full">
                    <a href="./Homepage" className="font-bold text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-house mr-2"></i>Home</a>

                    <a href="./Homepage" className="font-thin text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-screwdriver-wrench mr-2"></i>Accessability Tools</a>

                    <a href="./Homepage" className="font-thin text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-file-lines mr-2"></i>Policy</a>
                    
                    <a href="./login" className="font-thin text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-user mr-2"></i>Login</a>
                </div>
            </nav>

            <section className="w-full h-[600px] bg-[url('https://eslsca.edu.eg/wp-content/uploads/2023/03/E61884.jpg')] bg-center bg-cover 
            relative flex justify-center items-center">
                <div className="w-[40%] h-48 bg-blue-900 rounded-lg m-auto mr-10 mb-10 flex flex-col justify-center items-center">
                    <h1 className="text-white text-3xl font-bold ml-5 m-auto mt-7">Welcome to ESLSCA Accommidation Office</h1>
                    <div className="m-auto flex justify-center items-center">
                        <a href="./login" className="text-white text-3xl mr-2 ml-2 flex justify-center items-center transition-all
                        pr-10 pl-10 h-14 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 hover:font-bold"><i class="fa-solid fa-graduation-cap"></i>Apply</a>

                        <a href="./login" className="text-white text-3xl mr-2 ml-2 flex justify-center items-center transition-all
                        pr-10 pl-10 h-14 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 hover:font-bold"><i class="fa-solid fa-user mr-4"></i>Login</a>
                    </div>
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
                        <br/>
                        <br/>
                        This department will ensure students with disabilities 
                        have comprehensive support, advocacy, and access to 
                        academic and extracurricular opportunities.
                        </p>

                        
                            <a href="./login" className="text-blue-900 w-[40%] text-3xl flex justify-center items-center transition-all
                            pr-5 pl-5 h-14 border-2 border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white hover:font-bold">See more</a>
                        
                    </div>
                    <div className="w-[47%] h-[100%] mr-0 ml-5 bg-[url(https://eslsca.edu.eg/wp-content/uploads/2020/12/IMG_0504-b.jpg)]
                    bg-cover rounded-lg"></div>
                </div>
            </section>

            <section className="w-full h-[600px] bg-gradient-to-r from-blue-900 to-blue-950 p-8 flex flex-col justify-end items-end">
            <h1 className="text-4xl font-bold text-white before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-white before:z-10 before:left-0 before:top-12 before:rounded-sm" >Accommidations Provided</h1>

                <div className="w-full h-[90%] m-auto flex flex-row-reverse">
                    <div className=" w-[50%] flex justify-center items-center flex-col">
                        <p className="w-full h-[90%] text-white text-2xl text-right">
                        The Accommidation Office provides students with many things insuring their comfortability
                        and ease of accessability during their academic journey.
                        <br/>
                        <br/>
                        This includes assistive Technologies such as screen readers, voice recognition software, FM systems, and adaptive tools.
                        <br/>
                        <br/>
                        In addition to accessabile ramps, elevators, and tactile pathways around the campus
                        </p>

                        <a href="./login" className="text-white text-3xl flex justify-center items-center transition-all
                        pr-24 pl-24 h-14 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900 hover:font-bold">See all accommodations</a>
                    </div>
                    <div className="w-[47%] h-[100%] mr-5 ml-0 bg-[url(https://www.braunability.com/adobe/dynamicmedia/deliver/dm-aid--36e2cffd-d58b-46b3-911c-5cc49a8c144a/wheelchair-ramps.jpg?quality=82&preferwebp=true)]
                    bg-cover rounded-lg"></div>
                </div>
            </section>
            
        </div>
    );
}

export default Homepage;