/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AdminAnnoucements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:4000/announcements")
            .then((response) => {
                if (response.data.success) {
                    setAnnouncements(response.data.announcements);
                } else {
                    setError("Failed to fetch announcements");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleAddAnnouncement = (e) => {
        e.preventDefault();
        setSubmitting(true);
        const newAnnouncement = {
            title: newTitle,
            message: newMessage,
            sender: "Admin", // Replace with dynamic sender if available
            date: new Date().toLocaleDateString(),
        };

        axios
            .post("http://localhost:4000/announcements", newAnnouncement)
            .then((response) => {
                if (response.data.success) {
                    setAnnouncements([...announcements, response.data.announcement]);
                    setNewTitle("");
                    setNewMessage("");
                } else {
                    alert("Failed to add announcement");
                }
                setSubmitting(false);
            })
            .catch((err) => {
                alert(`Error: ${err.message}`);
                setSubmitting(false);
            });
    };

    const handleDeleteAnnouncement = (title) => {
        if (!window.confirm("Are you sure you want to delete this announcement?")) return;

        axios
            .delete(`http://localhost:4000/announcements/${title}`)
            .then((response) => {
                if (response.data.success) {
                    setAnnouncements(announcements.filter((announcement) => announcement.title !== title));
                } else {
                    alert("Failed to delete announcement");
                }
            })
            .catch((err) => {
                alert(`Error: ${err.message}`);
            });
    };

    if (loading) {
        return <div className="p-6 text-white">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 flex flex-col">
                <div className="p-6">
                    <h1 className="text-lg font-bold mb-4">Accommodation's Office</h1>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                        <div>
                            <p className="font-semibold">Welcome Back,</p>
                            <p className="text-sm">Staff Name</p>
                        </div>
                    </div>
                </div>

                <nav className="m-2 space-y-4">
                    <NavLink to="/admin-dashboard" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Dashboard </NavLink>
                    <NavLink to="/admin-students" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Students </NavLink>
                    <NavLink to="/admin-approved" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Approved </NavLink>
                    <NavLink to="/admin-pending" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Pending </NavLink>
                    <NavLink to="/admin-applied" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Applied </NavLink>
                    <NavLink to="/admin-meetings" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Meetings </NavLink>
                    <NavLink to="/admin-announcements" className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"> Announcements </NavLink>
                </nav>

                <div className="mt-auto p-6">
                    <button className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-blue-100 p-8">
                <h1 className="text-2xl font-bold mb-6 text-black">Announcements</h1>

                {/* Announcement Cards */}
                <div className="space-y-4">
                    {announcements.map((announcement, index) => (
                        <div key={index} className="bg-[#007ECA] p-6 rounded-xl mb-5 relative shadow-lg">
                            <h2 className="text-xl font-semibold">{announcement.title}</h2>
                            <p className="mt-2">{announcement.message}</p>
                            <div className="mt-4 text-sm text-gray-300">
                                <span>By: {announcement.sender}</span> | <span>Date: {announcement.date}</span>
                            </div>
                            <button
                                onClick={() => handleDeleteAnnouncement(announcement.title)}
                                className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                                title="Delete Announcement"
                            >
                                {/* Delete Icon (Trash Can) */}
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(16,16)"><path d="M6.49609,1c-0.82031,0 -1.49609,0.67578 -1.49609,1.49609v0.50391h-3v1h1v8.5c0,0.82813 0.67188,1.5 1.5,1.5h6c0.82813,0 1.5,-0.67187 1.5,-1.5v-8.5h1v-1h-3v-0.50391c0,-0.82031 -0.67578,-1.49609 -1.49609,-1.49609zM6.49609,2h2.00781c0.28125,0 0.49609,0.21484 0.49609,0.49609v0.50391h-3v-0.50391c0,-0.28125 0.21484,-0.49609 0.49609,-0.49609zM5,5h1v7h-1zM7,5h1v7h-1zM9,5h1v7h-1z"></path></g></g>
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Add New Announcement */}
                <div className="mt-8 p-6 bg-[#072D4A] rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Add New Announcement</h2>
                    <form onSubmit={handleAddAnnouncement} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-white">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                required
                                className="mt-1 w-full p-2 rounded-md bg-[#007ECA]/10 text-white focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                            <textarea
                                id="message"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                required
                                rows="4"
                                className="mt-1 w-full p-2 rounded-md bg-[#007ECA]/10 text-white focus:outline-none focus:ring-2 focus:ring-[#007ECA]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-2 px-4 bg-[#007ECA] hover:bg-[#007ECA]/10 text-white rounded-md disabled:opacity-50"
                        >
                            {submitting ? "Adding..." : "Add Announcement"}
                        </button>
                    </form>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-64 bg-[#072D4A]/90 p-6">
                <div className="bg-[#007ECA] rounded-xl p-4 h-1/2 mb-6">
                    <h2 className="text-xl font-bold">Announcements</h2>
                </div>
                <div className="bg-[#007ECA] rounded-xl p-4 h-2/5">
                    <h2 className="text-xl font-bold">Meetings</h2>
                </div>
            </aside>
        </div>
    );
};

export default AdminAnnoucements;