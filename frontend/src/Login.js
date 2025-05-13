import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // If email is for admin, redirect to admin dashboard
            if (email.includes('admin')) {
                navigate('/admin-dashboard');
                return;
            }

            // Check if email is for a dean
            if (email.includes('dean')) {
                try {
                    const response = await axios.post('http://localhost:4000/api/deans/login', {
                        email: email,
                        password: "deanpassword" // In a real application, you would collect a password
                    });

                    if (response.data.success) {
                        // Store dean info in localStorage
                        localStorage.setItem('deanData', JSON.stringify(response.data.dean));
                        navigate('/dean-dashboard');
                    } else {
                        setError('Invalid dean credentials');
                    }
                    return;
                } catch (err) {
                    console.error('Dean login error:', err);
                    setError('Dean account not found or incorrect credentials');
                    setLoading(false);
                    return;
                }
            }

            // Check if student exists with this email
            const response = await axios.get('http://localhost:4000/api/students');
            if (response.data.success) {
                const student = response.data.students.find(
                    student => student.email && student.email.toLowerCase() === email.toLowerCase()
                );

                if (student) {
                    // Store student info in localStorage for later use
                    localStorage.setItem('studentId', student.id);
                    localStorage.setItem('studentName', student.name);
                    localStorage.setItem('studentEmail', student.email);

                    // Redirect to dashboard
                    navigate('/dashboard');
                } else {
                    // Not a registered student, redirect to apply
                    navigate('/apply');
                }
            } else {
                setError('Failed to check student status');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred while logging in');
        } finally {
            setLoading(false);
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
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-red-400 text-center">
                            {error}
                        </div>
                    )}

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-[#007ECA] hover:bg-[#0A4770] text-white rounded-lg font-medium text-xl disabled:opacity-50"
                        >
                            {loading ? "Please wait..." : "Continue"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
