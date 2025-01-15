import React from "react";

let isMenuHidden = true;
let isDyslexia = false;
let isFontLarge = false;

const DEFAULT_FONT_LARGE = 19;
const DEFAULT_FONT_SIZE = 16;

function AccessabilityFeatures()
{
    return( <>
        <button 
            onClick={() => openAccessMenu()} 
            role="Accessability Features" aria-label="Click on this button to change your accessability features"
            className="fixed flex items-center text-cyan-100 bg-blue-700 w-18 h-18 
            rounded-full left-5 bottom-5 text-6xl border-solid border-4 border-blue-700 shadow-blue-solid
            hover:border-white hover:text-blue-700 hover:bg-white hover:shadow-gray-solid transition duration-200 ease-in-out">
            <i className="m-auto fa-solid fa-universal-access"></i>
        </button>  
        <div 
            className="fixed hidden items-center rounded-xl flex-col text-cyan-100 bg-white w-[200px] h-[400px] 
            left-5 bottom-24 text-6xl border-solid border-4 border-gray-300 shadow-gray-solid" 
            id="accessMenuBox">
            <button id="increaseButton" onClick={() => increaseGlobalFontSize()} className="Accessability-Button" >
                <i className="fa-solid fa-magnifying-glass"></i>
                <p className="m-auto font-bold">Increase Size</p>
            </button>
            <button id="dslxyaButton" onClick={() => setGlobalFontToDyslexic()} className="Accessability-Button">
                <i className="text-blue-700 m-auto fa-solid fa-eye text-4xl"></i>
                <p className="m-auto font-bold">Dyslexia Friendly</p>
            </button>
            <button className="Accessability-Button">
                <i className="text-blue-700 m-auto fa-solid fa-volume-high text-4xl"></i>
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

function increaseGlobalFontSize() {

    const root = document.documentElement;
    const increaseButton = document.getElementById("increaseButton");


    if(isFontLarge)
    {
        root.style.setProperty("--base-font-size", DEFAULT_FONT_SIZE + "px");
        isFontLarge = false;

        // Change the color of the button
        increaseButton.style.backgroundColor = "white";
        increaseButton.style.color = "#1d4ed8";
        increaseButton.firstChild.style.color = "#1d4ed8";
    }
    else
    {
        root.style.setProperty("--base-font-size", DEFAULT_FONT_LARGE + "px");
        isFontLarge = true;

        // Change the color of the button
        increaseButton.style.backgroundColor = "#1d4ed8";
        increaseButton.style.color = "white";
        increaseButton.firstChild.style.color = "white";
    }
    
}

function setGlobalFontToDyslexic()
{
    const root = document.documentElement;
    const dyslexiaButton = document.getElementById("dslxyaButton");

    if(isDyslexia)
    {
        document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\','Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif";
        isDyslexia = false;

        dyslexiaButton.style.backgroundColor = "white";
        dyslexiaButton.style.color = "#1d4ed8";
        dyslexiaButton.firstChild.style.color = "#1d4ed8";

        if(isFontLarge)
        {
            root.style.setProperty("--base-font-size", DEFAULT_FONT_LARGE + "px");
        }

    }
    else
    {
        document.body.style.fontFamily = "DyslexicFont, sans-serif";
        isDyslexia = true;
        
        dyslexiaButton.style.backgroundColor = "#1d4ed8";
        dyslexiaButton.style.color = "white";
        dyslexiaButton.firstChild.style.color = "white";

        if(isFontLarge)
        {
            const newSize = DEFAULT_FONT_LARGE - 1;
            console.log("newSize = " + newSize);
            root.style.setProperty("--base-font-size", newSize + "px");
        }

    }
    
}

export default AccessabilityFeatures;