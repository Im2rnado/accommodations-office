import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.includes('@eslsca.edu.eg')) {
            navigate('/admin-dashboard');
        } else {
            navigate('/apply');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#072D4A]/90 text-white background-image">
            <div className="w-full max-w-lg p-6 bg-[#072D4A]/60 rounded-3xl shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Login</h1>

                <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email or ID"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 text-2xl px-3 py-2 bg-[#072D4A]/70 text-white border border-[#007ECA] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#007ECA] hover:bg-[#0A4770] text-white rounded-lg font-medium text-xl"
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
