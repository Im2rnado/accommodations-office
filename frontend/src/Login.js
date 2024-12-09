import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/login", { email })
            .then((response) => {
                if (response.data.success) {
                    if (response.data.type === "admin") {
                        navigate("/admin-dashboard")
                    }
                    else if (response.data.type === "student") {
                        navigate("/apply")
                    }
                } else {
                    setError("Failed to fetch announcements");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
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
                            placeholder="Enter ESLSCA Email"
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
