import React from "react";
import { useState } from "react";
import { extractTextFromPDF } from "./pdfParser";
import AccessabilityFeatures from './AccessibilityFeatures';
import DashboardNavBar from "./DashboardNavBar";

function StudentPDF() {
    const [text, setText] = useState("");
    const [fileName, setFileName] = useState("");

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setFileName(file.name);
            try {
                const extractedText = await extractTextFromPDF(file);
                setText(extractedText);
            } catch (error) {
                console.error("Error extracting text:", error);
            }
        } else {
            alert("Please upload a valid PDF file.");
        }
    };
    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            <AccessabilityFeatures></AccessabilityFeatures>
            {/* Sidebar */}
            <DashboardNavBar />

            {/* Main Page */}
            <div className="flex flex-col bg-blue-100 w-full h-full min-h-screen">
                <h1 className="mt-10 ml-4 text-4xl font-bold text-[#072D4A]/90">Convert PDF</h1>
                <h1 className="mt-10 ml-4 text-2xl font-bold text-[#072D4A]/90">Upload any PDF file & convert it to be able to use the Accessability Tools</h1>


                <div className="p-4">
                    <label className="block mb-2 text-lg font-semibold text-black">Upload PDF:</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileUpload}
                        className="border p-2 rounded bg-[#007ECA] cursor-pointer"
                    />

                    {fileName && (
                        <p className="mt-2 text-sm text-gray-600">File Uploaded: {fileName}</p>
                    )}

                    {text && (
                        <div className="mt-4 p-2 border-2 border-[#007ECA] rounded">
                            <h2 className="text-2xl font-bold text-[#072D4A] mb-2">Extracted Text:</h2>
                            <p className="text-black text-xl">{text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentPDF;