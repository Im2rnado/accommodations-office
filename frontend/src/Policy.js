import React from "react";
import NavbarLanding from "./NavbarLanding";
function Policy()
{
    return(
        <div className="w-full h-[100%] min-h-screen bg-white">

            <NavbarLanding/>

            <section className="w-full h-[400px] bg-[url('https://eslsca.edu.eg/wp-content/uploads/2023/03/E61884.jpg')] bg-center bg-cover 
            relative flex justify-center items-center after:w-full after:h-[400px] after:bg-black after:opacity-60">
                <h1 className="text-8xl text-white font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10">Policy</h1>
            </section>

            {/* Main */}
            <section className="w-full h-[300px] bg-white p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-black before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-blue-900 before:z-10 before:left-0 before:top-12 before:rounded-sm">Policies & Legal Framework</h1>

            <ul className="list-disc text-2xl ml-10">
                <li><strong>Compliance with National Disability Laws: </strong>Ensuring adherence to all relevant legal requirements for accessibility and inclusion.</li>
                <li><strong>Inclusive Education Policies: </strong>Establishing policies that guarantee equal access to education for students with disabilities.</li>
                <li><strong>Accommodation Procedures: </strong>Defining clear guidelines for requesting, evaluating, and implementing academic and campus accommodations.</li>
                <li><strong>Non-Discrimination Policy: </strong>Enforcing a zero-tolerance stance against discrimination based on disability to foster an inclusive and equitable environment.</li>

            </ul>

            </section>

            <section className="w-full h-[400px] bg-gradient-to-r from-blue-900 to-blue-950 p-8 flex flex-col justify-start items-start">
            <h1 className="text-4xl font-bold text-white before:content-[''] relative before:absolute mb-10
                before:w-full before:h-2 before:bg-white before:z-10 before:left-0 before:top-12 before:rounded-sm">Student Responsibilities</h1>

                <ol className="list-disc text-2xl ml-10 text-white">
                    <li>Attend the first day of classes and review the syllabus for each course to be aware of course requirements related to class participation.</li>
                    <li>Notify your instructors of your accommodations, and as relevant, your eligibility for class Participation Accommodations at the beginning of the quarter, or as soon as eligible for accommodations.</li>
                    <li>Follow up with each relevant instructor &amp; disability advisor to discuss how this accommodation is applicable to their course. It is important to explore the boundaries of reasonableness for this accommodation in light of specific course learning objectives, as accommodation may not fundamentally alter any essential elements of a course.</li>
                    <li>Contact your Disability Adviser if you have questions or concerns at any point during the process.</li>
                </ol>
            </section>
            {/* Footer */}
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