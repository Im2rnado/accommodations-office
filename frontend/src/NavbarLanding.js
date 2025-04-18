import React from "react";
import ESLSCAlogo from "./assets/ESLSCA Accommodations Office.svg";

function NavbarLanding()
{
    return (
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
                    <a href="./ApplyLandingPage" className="font-thin text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-graduation-cap mr-2"></i>Apply</a>
                    
                    <a href="./login" className="font-thin text-white m-auto flex justify-center 
                    items-center transition-all text-2xl h-full bg-transparent 
                    hover:bg-white hover:text-blue-900 pr-4 pl-4"><i class="fa-solid fa-user mr-2"></i>Login</a>
                </div>
            </nav>
    );
}

export default NavbarLanding;