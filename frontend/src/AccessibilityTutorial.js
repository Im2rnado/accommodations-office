import React from "react";

function AccessabilityTutorial()
{
    return (
        <div className="flex flex-row w-full min-h-screen bg-gray-900 text-white">
            <aside className="w-[20%] bg-blue-900 flex flex-col items-center justify-start">
                <div className="w-full h-[12%] bg-white text-blue-900 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mt-0">
                        <i class="fa-solid fa-book mr-2"></i>Accessability Tutorial
                    </h1>
                    <div className="w-[80%] h-2 bg-gray-300 mt-3 rounded-full relative
                    before:content-[''] before:absolute before:bg-red-300 before:w-[10%] 
                    before:h-2 before:z-10 before:rounded-full">

                    </div>

                    <div></div>
                </div>

                <div className="w-full h-max flex flex-col">
                    <button className="w-full h-12 text-white flex bg-blue-700 hover:bg-blue-950
                    justify-start items-center text-xl pl-4"><i class="fa-solid fa-list mr-3
                    "></i>Welcome to ESLSCA</button>

                    <button className="w-full h-12 text-white flex bg-transparent hover:bg-blue-950
                    justify-start items-center text-xl pl-4"><i class="fa-solid fa-list mr-3
                    "></i>Accessibility Button</button>

                    <button className="w-full h-12 text-white flex bg-transparent hover:bg-blue-950
                    justify-start items-center text-xl pl-4"><i class="fa-solid fa-list mr-3
                    "></i>Using Maginifier</button>
                </div>
            </aside>

            <div className="w-[80%] h-screen flex flex-col justify-start items-center overflow-y-scroll">
                <h1 className="w-full text-2xl pt-5 pb-5 pl-10 font-bold bg-blue-500 flex justify-start items-center">
                    <i class="fa-solid fa-list mr-3"></i>Welcome to ESLSCA University
                </h1>

                <p className="text-2xl w-[90%] h-fit mt-6 mb-6">Congratulations! Now you have become a part of ESLSCA's family</p>

                <img src="https://eslsca.edu.eg/wp-content/uploads/2023/04/IMG_8325.jpg" alt="Image of ESLSCA students"
                className="w-[60%] rounded-md"></img>
                <p className="text-2xl w-[90%] h-fit mt-6">
                    In those modules, we are going to walk through this platform to make you understand
                    how to navigate and use the Accessibility Tools
                </p>

                <p className="text-2xl w-[90%] h-fit mt-6">
                    Click on the button below to see the next module
                </p>

                <p className="text-2xl w-[90%] h-fit mt-6 mb-6">
                    Click on the button below to see the next module
                </p>

                <button className="w-48 pt-2 pb-2 m-auto mb-6 bg-blue-500 text-white border-solid border-4 transition-all duration-200
                border-blue-500 shadow-blue-solid hover:bg-white hover:border-white hover:shadow-gray-solid hover:text-black
                rounded-md text-xl font-bold">Next <i class="fa-solid fa-arrow-right ml-2"></i></button>
            </div>
        </div>
    );
}


function changeModule(order)
{   

}

export default AccessabilityTutorial;
