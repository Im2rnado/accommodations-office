import React from "react";

function AccessabilityTutorial()
{
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gray-900 text-white overflow-y-auto">
            <div id="module1" className="flex flex-col justify-start items-center">
                <h1 id="moduleTitle" className="w-full text-2xl pt-5 pb-5 pl-10 font-bold bg-blue-500 flex justify-start items-center">
                <i class="fa-solid fa-list mr-3"></i>Welcome to ESLSCA University
                </h1>

                <p className="Tutorial-Text mb-6">Congratulations! Now you have become a part of ESLSCA's family</p>

                <img src="https://eslsca.edu.eg/wp-content/uploads/2023/04/IMG_8325.jpg" alt="Image of ESLSCA students"
                className="w-[50%] rounded-md"></img>
                <p className="Tutorial-Text">
                    In those modules, we are going to walk through this platform to make you understand
                    how to navigate and use the Accessibility Tools
                </p>
                

                <p className="Tutorial-Text">
                    Click on the button below to see the next module
                </p>


                <button id="nextButton" onClick={()=>changeModule()} className="w-48 h-20 pt-2 pb-2 m-auto mb-6 bg-blue-500 text-white border-solid border-4 transition-all duration-200
                border-blue-500 shadow-blue-solid hover:bg-white hover:border-white hover:shadow-gray-solid hover:text-black
                rounded-md text-xl font-bold">Next <i class="fa-solid fa-arrow-right ml-2"></i></button>
            </div>


            
            <div id="module2" className="hidden flex-col justify-start items-center w-full h-fit">
                <h1 className="w-full text-2xl pt-5 pb-5 pl-10 font-bold bg-blue-500 flex justify-start items-center">
                <i class="fa-solid fa-list mr-3"></i>Accessability Button
                </h1>


                <p className="Tutorial-Text mb-6">
                On the accommodation website, you will always find the Accessibility Button at the bottom left of your screen
                </p>

                <div className="flex items-center text-cyan-100 bg-blue-700 w-48 h-48
                rounded-full text-[11rem] border-solid border-4 border-blue-700 shadow-blue-solid
                 hover:border-white hover:text-blue-700 hover:bg-white hover:shadow-gray-solid transition duration-200 ease-in-out">
                <i className="m-auto fa-solid fa-universal-access"></i></div>

                <p className="Tutorial-Text mb-6">
                The button is also accessible by pressing <strong> [`] </strong> key on your keyboard
                </p>

                <button id="nextButton" onClick={()=>changeModule()} className="w-48 h-20 pt-2 pb-2 m-auto mb-6 bg-blue-500 text-white border-solid border-4 transition-all duration-200
                border-blue-500 shadow-blue-solid hover:bg-white hover:border-white hover:shadow-gray-solid hover:text-black
                rounded-md text-xl font-bold">Next <i class="fa-solid fa-arrow-right ml-2"></i></button>
            </div>

            <div id="module3" className="hidden flex-col justify-start items-center w-full h-fit">
                <h1 className="w-full text-2xl pt-5 pb-5 pl-10 font-bold bg-blue-500 flex justify-start items-center">
                <i class="fa-solid fa-list mr-3"></i>Using Maginifier
                </h1>


                <p className="Tutorial-Text mb-6">
                The magnifier button lets you increase the size of your view
                </p>

                <div id="increaseButton" className="flex flex-col rounded-xl justify-center items-center 
                w-[360px] h-[200px] text-base m-auto mt-2 mb-2 text-blue-700 bg-white
                border-4 border-solid border-blue-700
                shadow-blue-solid hover:bg-gray-200 transition-all duration-150" >
                <i className="m-auto fa-solid fa-magnifying-glass text-6xl"></i>
                <p className="m-auto font-bold text-3xl">Increase Size</p>
                </div>

                <p className="Tutorial-Text mb-6">
                You can also adjust the size of your view from your browser by holding 
                <strong> ctrl + [moving the mousewheel]</strong>
                </p>

                <button id="nextButton" onClick={()=>changeModule()} className="w-48 h-20 pt-2 pb-2 m-auto mb-6 bg-blue-500 text-white border-solid border-4 transition-all duration-200
                border-blue-500 shadow-blue-solid hover:bg-white hover:border-white hover:shadow-gray-solid hover:text-black
                rounded-md text-xl font-bold">Next <i class="fa-solid fa-arrow-right ml-2"></i></button>
            </div>


            <div id="module4" className="hidden flex-col justify-start items-center w-full h-fit">
                <h1 className="w-full text-2xl pt-5 pb-5 pl-10 font-bold bg-blue-500 flex justify-start items-center">
                <i class="fa-solid fa-list mr-3"></i>Dyslexic Font
                </h1>


                <p className="Tutorial-Text mb-6">
                If the current font that is used on the page not suitable for you, try switching 
                between fonts using dyslexic font button
                </p>

                <div id="increaseButton" className="flex flex-col rounded-xl justify-center items-center 
                w-[360px] h-[200px] text-base m-auto mt-2 mb-2 text-blue-700 bg-white
                border-4 border-solid border-blue-700
                shadow-blue-solid hover:bg-gray-200 transition-all duration-150" >
                <i className="text-blue-700 m-auto fa-solid fa-eye text-6xl"></i>
                <p className="m-auto font-bold text-3xl">Dyslexic Font</p>
                </div>

                <button id="nextButton" onClick={()=>changeModule()} className="w-48 h-20 pt-2 pb-2 m-auto mt-6 mb-6 bg-blue-500 text-white border-solid border-4 transition-all duration-200
                border-blue-500 shadow-blue-solid hover:bg-white hover:border-white hover:shadow-gray-solid hover:text-black
                rounded-md text-xl font-bold">Next <i class="fa-solid fa-arrow-right ml-2"></i></button>
            </div>

            <div id="module5" className="hidden flex-col justify-start items-center w-full h-fit">
                <h1 className="w-full text-2xl pt-5 pb-5 pl-10 font-bold bg-blue-500 flex justify-start items-center">
                <i class="fa-solid fa-list mr-3"></i>Indicator Bar
                </h1>


                <p className="Tutorial-Text mb-6">
                The indicator bar helps you concentrate more in reading by only allowing to show the line 
                you are reading
                </p>

                <div id="increaseButton" className="flex flex-col rounded-xl justify-center items-center 
                w-[360px] h-[200px] text-base m-auto mt-2 mb-2 text-blue-700 bg-white
                border-4 border-solid border-blue-700
                shadow-blue-solid hover:bg-gray-200 transition-all duration-150" >
                <i className="text-blue-700 m-auto fa-solid fa-arrow-pointer text-6xl"></i>
                <p className="m-auto font-bold text-3xl">Indicator Bar</p>
                </div>

                <p className="Tutorial-Text mb-6">
                Just make the indicator visible and move it using the mouse
                </p>

                <button id="nextButton" onClick={()=>changeModule()} className="w-48 h-20 pt-2 pb-2 m-auto mt-6 mb-6 bg-blue-500 text-white border-solid border-4 transition-all duration-200
                border-blue-500 shadow-blue-solid hover:bg-white hover:border-white hover:shadow-gray-solid hover:text-black
                rounded-md text-xl font-bold">Next <i class="fa-solid fa-arrow-right ml-2"></i></button>
            </div>

            <div id="module6" className="hidden flex-col justify-start items-center w-full h-fit">
                <h1 className="w-full text-2xl pt-5 pb-5 pl-10 font-bold bg-blue-500 flex justify-start items-center">
                <i class="fa-solid fa-list mr-3"></i>Using Screen Reader
                </h1>


                <p className="Tutorial-Text mb-6">
                To navigate easily on the website, download JAWS Screen reader from this link <a className="font-bold text-blue-500" href="https://software.vfo.digital/JAWS/2025/2025.2412.102.400/5D59CA0A-D1B0-45F3-A1FB-C5AC8CBA2FAA/J2025.2412.102.400-any.exe">JAWS Download link</a>
                </p>

                <p className="Tutorial-Text mb-6">
                if you are using Windows, You can also enable Windows Narrator by pressing <strong>Windows logo key + Ctrl + Enter</strong>
                </p>
                <div id="increaseButton" className="flex flex-col rounded-xl justify-center items-center 
                w-[360px] h-[200px] text-base m-auto mt-2 mb-2 text-blue-700 bg-white
                border-4 border-solid border-blue-700
                shadow-blue-solid hover:bg-gray-200 transition-all duration-150" >
                <i className="text-blue-700 m-auto fa-solid fa-volume-high text-6xl"></i>
                <p className="m-auto font-bold text-3xl">Screen Reader</p>
                </div>


                <button id="nextButton" onClick={()=>changeModule()} className="w-48 h-20 pt-2 pb-2 m-auto mt-6 mb-6 bg-blue-500 text-white border-solid border-4 transition-all duration-200
                border-blue-500 shadow-blue-solid hover:bg-white hover:border-white hover:shadow-gray-solid hover:text-black
                rounded-md text-xl font-bold">Next <i class="fa-solid fa-arrow-right ml-2"></i></button>
            </div>

            <div id="module7" className="hidden flex-col justify-start items-center w-full h-fit">
                <h1 className="w-full text-2xl pt-5 pb-5 pl-10 font-bold bg-blue-500 flex justify-start items-center">
                <i class="fa-solid fa-list mr-3"></i>You are all set
                </h1>

                <p className="Tutorial-Text mb-6">
                You are all set, click on the button below to return to the Dashboard
                </p>

                <a href="/Dashboard" onClick={()=>changeModule()} className="w-48 h-20 pt-2 pb-2 m-auto mt-6 mb-6 bg-blue-500 text-white border-solid border-4 transition-all duration-200
               justify-center items-center flex border-blue-500 shadow-blue-solid hover:bg-white hover:border-white hover:shadow-gray-solid hover:text-black
                rounded-md text-xl font-bold">Return<i class="fa-solid fa-house ml-2"></i></a>
            </div>
        </div>

    );
}

let moduleOrder = 1;
function changeModule()
{   
    moduleOrder++
    if(moduleOrder > 7)
    {
        return;
    }
    document.getElementById("module" + moduleOrder).style.display = "flex";
    document.getElementById("module"+ moduleOrder).scrollIntoView({ behavior: "smooth" });

}

export default AccessabilityTutorial;
