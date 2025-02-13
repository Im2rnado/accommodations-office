import React from "react";


let isMenuHidden = true;
let isDyslexia = false;
let isFontLarge = false;
let isIndicatorHidden = true;

const DEFAULT_FONT_LARGE = 19;
const DEFAULT_FONT_SIZE = 16;

function AccessabilityFeatures()
{
    return( <>
        <button 
            onClick={() => openAccessMenu()} 
            role="Accessability Features" aria-label="Click on this button to change your accessability features"
            className="fixed flex items-center text-cyan-100 bg-blue-700 w-18 h-18 
            rounded-full left-5 bottom-5 z-20 text-6xl border-solid border-4 border-blue-700 shadow-blue-solid
            hover:border-white hover:text-blue-700 hover:bg-white hover:shadow-gray-solid transition duration-200 ease-in-out">
            <i className="m-auto fa-solid fa-universal-access"></i>
        </button>
        <div id="indicatorBar" onMouseMove={() => setIndicatorLocation()} className="w-full h-full hidden flex-col absolute z-10 left-0 top-0 m-0 justify-center items-center">
            <div className="w-full h-full bg-black opacity-80"></div>

            <div className="w-full h-32  border-t-8 border-b-8 
            border-solid border-red-500"></div>
            
            <div className="w-full h-full bg-black opacity-80"></div>
        </div>  
        <div 
            className="fixed flex items-center rounded-xl flex-col text-cyan-100 bg-white 
            w-[200px] h-max transition-all duration-200 pt-2 pb-2 z-20
            left-[-220px] bottom-24 text-6xl border-solid border-4 border-gray-300 shadow-gray-solid" 
            id="accessMenuBox">

            <button id="increaseButton" onClick={() => increaseGlobalFontSize()} className="Accessability-Button transition-all duration-150" >
                <i className="fa-solid fa-magnifying-glass"></i>
                <p className="m-auto font-bold">Increase Size</p>
            </button>

            <button id="dslxyaButton" onClick={() => setGlobalFontToDyslexic()} className="Accessability-Button transition-all duration-150">
                <i className="text-blue-700 m-auto fa-solid fa-eye text-4xl"></i>
                <p className="m-auto font-bold">Dyslexic Font</p>
            </button>

            <button id="indicatorButton" onClick={() => setIndicatorVisible()} className="Accessability-Button transition-all duration-150">
                <i className="text-blue-700 m-auto fa-solid fa-arrow-pointer text-4xl"></i>
                <p className="m-auto font-bold">Indicator</p>
            </button>

            <button className="Accessability-Button">
                <i className="text-blue-700 m-auto fa-solid fa-volume-high text-4xl"></i>
                <p className="m-auto font-bold">Screen Reader</p>
            </button>

            <div className="flex rounded-xl justify-center items-center  
                w-[160px] h-16 text-base m-auto mt-2 mb-2 pb-1">

                <button className="flex flex-col rounded-xl items-center bg-white hover:bg-blue-700 
                w-full h-full text-base m-auto mr-1 text-blue-700 hover:text-white 
                border-4 border-solid border-blue-700
                shadow-blue-solid transition-all duration-150;">
                    <i className="fa-solid fa-circle-half-stroke text-2xl"></i>
                    <p className="m-auto font-bold text-sm">Contrast</p>
                </button>

                <a href="/accessability-tutorial" className="flex flex-col rounded-xl items-center bg-white hover:bg-blue-700 
                w-full h-full text-base m-auto ml-1 text-blue-700 hover:text-white 
                border-4 border-solid border-blue-700
                shadow-blue-solid transition-all duration-150;">
                    <i className="fa-solid fa-question text-2xl"></i>
                    <p className="m-auto font-bold text-sm">Tutorial</p>
                </a>
            </div>
        </div>


    </>
    
    );

}




function openAccessMenu()
{
    var menu = document.getElementById("accessMenuBox");
    if(isMenuHidden) 
    {
        menu.style.left = "20px";
        isMenuHidden = false;
    }
    else
    {
        menu.style.left = "-220px";
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

function setIndicatorVisible()
{
    let indicatorBar = document.getElementById("indicatorBar");
    let indicatorButton = document.getElementById("indicatorButton");

    if(isIndicatorHidden)
    {
        indicatorBar.style.display = "Flex";
        isIndicatorHidden = false;

        indicatorButton.style.backgroundColor = "#1d4ed8";
        indicatorButton.style.color = "white";
        indicatorButton.firstChild.style.color = "white";
    }
    else
    {
        indicatorBar.style.display = "None";
        isIndicatorHidden = true;

        indicatorButton.style.backgroundColor = "white";
        indicatorButton.style.color = "#1d4ed8";
        indicatorButton.firstChild.style.color = "#1d4ed8";  
    }
}

function setIndicatorLocation()
{
    let indicatorBar = document.getElementById("indicatorBar");

    if(indicatorBar.style.display != "Hidden")
    {
        document.addEventListener("mousemove", function(e){
            indicatorBar.style.top = (e.clientY - 420) + "px";
        });
    }
}

export default AccessabilityFeatures;