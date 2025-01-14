import React from "react";

let isMenuHidden = true;
let isDyslexia = false;

function AccessabilityFeatures()
{
    return( <>
        <button 
            onClick={() => openAccessMenu()} 
            role="Accessability Features" aria-label="Click on this button to change your accessability features"
            className="fixed flex items-center text-cyan-100 bg-sky-500 w-[70px] h-[70px] rounded-full left-5 bottom-5 text-6xl">
            <i className="m-auto fa-solid fa-universal-access"></i>
        </button>  
        <div 
            className="fixed hidden items-center rounded-xl flex-col text-cyan-100 bg-white w-[200px] h-[400px] left-5 bottom-24 text-6xl" 
            id="accessMenuBox">
            <button className="flex flex-col rounded-xl items-center w-[160px] h-[100px] text-base m-auto text-black border-4 border-solid border-sky-800">
                <i className="text-sky-950 m-auto fa-solid fa-font text-4xl"></i>
                <p className="m-auto font-bold">Increase Text Size</p>
            </button>
            <button onClick={() => setGlobalFontToDyslexic()} className="flex flex-col rounded-xl items-center w-[160px] h-[100px] text-base m-auto text-black border-4 border-solid border-sky-800">
                <i className="text-sky-950 m-auto fa-solid fa-eye text-4xl"></i>
                <p className="m-auto font-bold">Dyslexia Friendly</p>
            </button>
            <button className="flex flex-col rounded-xl items-center w-[160px] h-[100px] text-base m-auto text-black border-4 border-solid border-sky-800">
                <i className="text-sky-950 m-auto fa-solid fa-volume-high text-4xl"></i>
                <p className="m-auto font-bold">Screen Reader</p>
            </button>
        </div>
    </>
    
    );
}

function openAccessMenu()
{
    var menu = document.getElementById("accessMenuBox");
    if(isMenuHidden)
    {
        menu.style.display = "flex";
        isMenuHidden = false;
    }
    else
    {
        menu.style.display = "none";
        isMenuHidden = true;
    }
}

function setGlobalFontToDyslexic()
{
    if(isDyslexia)
    {
        document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\','Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif";
        isDyslexia = false;
    }
    else
    {
        document.body.style.fontFamily = 'DyslexicFont, sans-serif';
        isDyslexia = true;
    }
    
}

export default AccessabilityFeatures;