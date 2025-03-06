import React from "react";
import ESLSCAlogo from "./assets/ESLSCA Accommidation Office.svg";
function Policy()
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

                    <a href="./Policy" className="font-thin text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-file-lines mr-2"></i>Policy</a>

                    <a href="./Apply" className="font-thin text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-graduation-cap mr-2"></i>Apply</a>
                    
                    <a href="./login" className="font-thin text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-user mr-2"></i>Login</a>
                </div>
            </nav>

            <section className="w-full h-[400px] bg-[url('https://eslsca.edu.eg/wp-content/uploads/2023/03/E61884.jpg')] bg-center bg-cover 
            relative flex justify-center items-center after:w-full after:h-[400px] after:bg-black after:opacity-60">
                <h1 className="text-8xl text-white font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10">Policy</h1>
            </section>
            <section className="w-full h-[600px] bg-white p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-black before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-blue-900 before:z-10 before:left-0 before:top-12 before:rounded-sm">Policies & Legal Framework</h1>

            <ul className="list-disc text-2xl ml-10">
                <li><strong>Compliance with National Disability Laws: </strong>Ensuring adherence to all relevant legal requirements for accessibility and inclusion.</li>
                <li><strong>Inclusive Education Policies: </strong>Establishing policies that guarantee equal access to education for students with disabilities.</li>
                <li><strong>Accommodation Procedures: </strong>Defining clear guidelines for requesting, evaluating, and implementing academic and campus accommodations.</li>
                <li><strong>Non-Discrimination Policy: </strong>Enforcing a zero-tolerance stance against discrimination based on disability to foster an inclusive and equitable environment.</li>

            </ul>

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

export default Policy;