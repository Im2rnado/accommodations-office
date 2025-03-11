import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const Apply = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // Track which step of the form we're on

    // Step 1 - Personal details
    const [studentId, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [medicalReports, setMedicalReports] = useState([]);
    const [doctorsForm, setDoctorsForm] = useState(null);
    const [school, setSchool] = useState('');

    // Step 2 - Disability information
    const [disabilityDescription, setDisabilityDescription] = useState('');
    const [accommodationNeeds, setAccommodationNeeds] = useState('');
    const [canUseStairs, setCanUseStairs] = useState('');
    const [canEvacuate, setCanEvacuate] = useState('');
    const [canHearAlarm, setCanHearAlarm] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [disclosureAgreement, setDisclosureAgreement] = useState(null);

    // References for file inputs
    const medicalReportRef = useRef();
    const doctorsFormRef = useRef();

    const handleMedicalReportChange = (e) => {
        const files = Array.from(e.target.files);
        setMedicalReports(files);
    };

    const handleDoctorsFormChange = (e) => {
        setDoctorsForm(e.target.files[0]);
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Student ID:', studentId);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Date of Birth:', dateOfBirth);
        console.log('Medical Reports:', medicalReports);
        console.log('Doctor\'s Form:', doctorsForm);
        console.log('School Name:', school);
        console.log('Disability Description:', disabilityDescription);
        console.log('Accommodation Needs:', accommodationNeeds);
        console.log('Can Use Stairs:', canUseStairs);
        console.log('Can Evacuate:', canEvacuate);
        console.log('Can Hear Alarm:', canHearAlarm);
        console.log('Additional Info:', additionalInfo);
        console.log('Disclosure Agreement:', disclosureAgreement);

        // Here you would typically send the data to your server
        navigate('/dashboard');
    };

    // Render Step 1 - Personal Details
    if (step === 1) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#072D4A]/90 text-white background-image">
                <div className="w-full max-w-lg p-6 bg-[#072D4A]/60 rounded-3xl shadow-2xl">
                    <div className="flex mb-4">
                        <NavLink to="/login" className="text-white mr-20 mt-2">&lt; Back</NavLink>
                        <h1 className="text-3xl font-bold text-center">Personal Details</h1>
                    </div>
                    <form className="space-y-4" onSubmit={handleNextStep}>
                        <div>
                            <label
                                htmlFor="studentId"
                                className="block text-base font-medium text-white"
                            >
                                Student ID Number
                            </label>
                            <input
                                type="text"
                                id="studentId"
                                placeholder="Enter ID Number"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block text-base font-medium text-white"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className="block text-base font-medium text-white"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="dob"
                                className="block text-base font-medium text-white"
                            >
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                placeholder="Enter Date of Birth"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="school"
                                className="block text-base font-medium text-white"
                            >
                                School
                            </label>
                            <select
                                id="school"
                                value={school}
                                onChange={(e) => setSchool(e.target.value)}
                                className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                required
                            >
                                <option value="">Select School</option>
                                <option value="Business">Business</option>
                                <option value="Computing">Computing</option>
                                <option value="Media">Media</option>
                                <option value="Cinema">Cinema</option>
                                <option value="Sports">Sports</option>
                                <option value="Postgrad">Postgrad</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Medical Reports Upload */}
                            <div
                                onClick={() => medicalReportRef.current.click()}
                                className="cursor-pointer"
                            >
                                <div className="bg-[#0A4770] text-center rounded-lg shadow-lg w-[100%] hover:bg-[#0A4770]/80 transition-colors">
                                    <div className="bg-[#35B7FB] px-4 py-2 rounded-lg w-full">
                                        <h1 className="text-xl font-semibold text-black">Medical Reports</h1>
                                    </div>
                                    <div className="flex items-center p-2">
                                        <span className='text-white text-sm'>
                                            {medicalReports.length > 0
                                                ? `${medicalReports.length} files selected`
                                                : "Click to upload medical reports"}
                                        </span>
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    multiple
                                    ref={medicalReportRef}
                                    onChange={handleMedicalReportChange}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                />
                            </div>

                            {/* Doctor's Form Upload */}
                            <div
                                onClick={() => doctorsFormRef.current.click()}
                                className="cursor-pointer"
                            >
                                <div className="bg-[#0A4770] text-center rounded-lg shadow-lg w-[100%] hover:bg-[#0A4770]/80 transition-colors">
                                    <div className="bg-[#35B7FB] px-4 py-2 rounded-lg w-full">
                                        <h1 className="text-xl font-semibold text-black">Doctor's Form</h1>
                                    </div>
                                    <div className="flex items-center p-2">
                                        <span className='text-white text-sm'>
                                            {doctorsForm
                                                ? doctorsForm.name
                                                : "Click to upload doctor's form"}
                                        </span>
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    ref={doctorsFormRef}
                                    onChange={handleDoctorsFormChange}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#007ECA] hover:bg-[#0A4770] text-white rounded-lg font-medium text-lg"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    // Render Step 2 - Disability Information
    if (step === 2) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#072D4A]/90 text-white background-image">
                <div className="w-full max-w-lg p-6 bg-[#072D4A]/60 rounded-3xl shadow-2xl">
                    <div className="flex mb-4">
                        <button onClick={() => setStep(1)} className="text-white mr-20 mt-2">&lt; Back</button>
                        <h1 className="text-3xl font-bold text-center">Disability Details</h1>
                    </div>
                    <form className="space-y-4" onSubmit={handleNextStep}>
                        <div>
                            <label
                                htmlFor="disabilityDescription"
                                className="block text-base font-medium text-white"
                            >
                                Your disability, condition or Specific Learning Difference (SpLD)
                            </label>
                            <textarea
                                id="disabilityDescription"
                                placeholder="Please tell us about your disability, condition or SpLD. How does it affect you?"
                                rows="3"
                                value={disabilityDescription}
                                onChange={(e) => setDisabilityDescription(e.target.value)}
                                className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="accommodationNeeds"
                                className="block text-base font-medium text-white"
                            >
                                Accommodation
                            </label>
                            <textarea
                                id="accommodationNeeds"
                                placeholder="Please tell us about any disability needs you might have (e.g. a ground floor room)"
                                rows="3"
                                value={accommodationNeeds}
                                onChange={(e) => setAccommodationNeeds(e.target.value)}
                                className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                            />
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-white mb-2">Emergency situations</h3>
                            <p className="text-sm text-white mb-4">In an emergency, can you:</p>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label className="block text-base font-medium text-white">
                                    Get up and down the stairs?
                                </label>
                                <input
                                    type="text"
                                    placeholder="Please give brief details"
                                    value={canUseStairs}
                                    onChange={(e) => setCanUseStairs(e.target.value)}
                                    className="mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label className="block text-base font-medium text-white">
                                    Evacuate a building by yourself?
                                </label>
                                <input
                                    type="text"
                                    placeholder="Please give brief details"
                                    value={canEvacuate}
                                    onChange={(e) => setCanEvacuate(e.target.value)}
                                    className="mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label className="block text-base font-medium text-white">
                                    Hear the fire alarm?
                                </label>
                                <input
                                    type="text"
                                    placeholder="Please give brief details"
                                    value={canHearAlarm}
                                    onChange={(e) => setCanHearAlarm(e.target.value)}
                                    className="mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="additionalInfo"
                                className="block text-base font-medium text-white"
                            >
                                Is there any additional information you would like us to be aware of?
                            </label>
                            <textarea
                                id="additionalInfo"
                                rows="3"
                                value={additionalInfo}
                                onChange={(e) => setAdditionalInfo(e.target.value)}
                                className="w-full mt-1 px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#007ECA] hover:bg-[#0A4770] text-white rounded-lg font-medium text-lg"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    if (step === 3) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#072D4A]/90 text-white background-image">
                <div className="w-full max-w-lg p-6 bg-[#072D4A]/60 rounded-3xl shadow-2xl">
                    <div className="flex mb-4">
                        <button onClick={() => setStep(2)} className="text-white mr-20 mt-2">&lt; Back</button>
                        <h1 className="text-3xl font-bold text-center">Applicant disclosure</h1>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="mt-6">
                            <p className="text-sm text-white mb-2">
                                I have provided this information so that the University can set up a support plan for me as a disabled student.
                            </p>
                            <p className="text-sm text-white mb-2">
                                I understand my support plan and information about my needs may be shared with other teams within the University so my disability adjustments can be co-ordinated.
                            </p>
                            <p className="text-sm text-white mb-2">
                                I understand there are circumstances when information about my needs may need to be shared by law, for example, medical emergencies.
                            </p>
                            <p className="text-sm text-white mb-4">
                                I understand that this may include sharing basic information within the University about the nature of my disability and its impact and what support I require.
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="agree"
                                        name="disclosure"
                                        value="agree"
                                        checked={disclosureAgreement === "agree"}
                                        onChange={(e) => setDisclosureAgreement(e.target.value)}
                                        className="mr-2"
                                        required
                                    />
                                    <label htmlFor="agree" className="text-sm text-white">
                                        Yes, I understand and agree
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="disagree"
                                        name="disclosure"
                                        value="disagree"
                                        checked={disclosureAgreement === "disagree"}
                                        onChange={(e) => setDisclosureAgreement(e.target.value)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="disagree" className="text-sm text-white">
                                        No, I do not agree and require further information
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#007ECA] hover:bg-[#0A4770] text-white rounded-lg font-medium text-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Apply;