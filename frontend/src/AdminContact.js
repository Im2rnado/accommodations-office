/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const AdminContact = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/dashboard")
            .then((response) => {
                if (response.data.success) {
                    setStats(response.data.stats);
                } else {
                    setError("Failed to fetch stats");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await axios.get('http://localhost:4000/contact');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching PendingForms:', error);
            }
        };

        fetchContact();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
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
                            <p className="text-sm">Laila</p>
                        </div>
                    </div>
                </div>

                <nav className="m-2 space-y-4">
                    <NavLink to="/admin-dashboard" className="block py-2 px-4 bg-[#007ECA]/70 text-white hover:bg-[#007ECA]/60 rounded-xl"> Dashboard </NavLink>
                    <NavLink to="/admin-students" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Students </NavLink>
                    <NavLink to="/admin-approved" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Approved </NavLink>
                    <NavLink to="/admin-pending" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Pending </NavLink>
                    <NavLink to="/admin-applied" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Applied </NavLink>
                    <NavLink to="/admin-announcements" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Announcements </NavLink>
                    <NavLink to="/admin-contact" className="block py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl"> Contact Messages </NavLink>
                </nav>

                <div className="mt-auto p-6">
                    <button className="w-full text-left py-2 px-4 text-white hover:bg-[#007ECA]/60 rounded-xl">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Dashboard */}
            <main className="flex-1 bg-blue-100 p-8">
                <h1 className="text-2xl font-bold mb-6 text-black">Contact Messages</h1>
                
                {contacts[0] && contacts.length > 0 ?(
                    contacts.map((item, key)=>(
                        <div id={"key" + key} className="w-[50%] h-max bg-blue-600 rounded-lg pt-10 pb-10 mb-5">  
                <div className="w-[80%] m-auto mb-0 flex justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label className="text-white font-bold text-xl mb-1">Name</label>
                        <div className="w-full p-2 text-xl rounded-lg text-blue-950 bg-white">{item.name}</div>              
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label className="text-white font-bold text-xl mb-1">Type</label>
                        <div className="w-full p-2 text-xl rounded-lg font-bold text-blue-950 bg-white">{item.type}</div>             
                    </div>
                </div>
                <div className="w-[80%] m-auto mb-0 flex justify-between">
                    <div className="flex flex-col w-[48%]">
                        <label className="text-white font-bold text-xl mb-1">Email</label>
                        <div className="w-full  p-2 text-xl rounded-lg text-blue-950 bg-white">{item.email}</div>
                    </div>

                    <div className="flex flex-col w-[48%]">
                        <label className="text-white font-bold text-xl mb-1">Date</label>
                        <div className="w-full p-2 text-xl rounded-lg  text-blue-950 bg-white">{item.date}</div>             
                    </div>
                </div>

                <div className="flex flex-col w-[80%] m-auto mt-2">
                    <label className="text-white font-bold text-xl mb-1">Message</label>
                    <div className="w-full p-2 text-xl rounded-lg text-blue-950 font-bold bg-white">{item.message}</div>
                </div>

                <button onClick={()=>{deleteContact(item, ("key" + key))}} className="w-[20%] pt-3 pb-3 bg-white flex justify-center
                items-center rounded-lg font-bold text-red-700 text-2xl m-auto mt-5 transition-all duration-200
                hover:bg-red-700 hover:text-white">Remove<i class="fa-solid fa-trash ml-2"></i></button>
            </div>
                    )
                )):(<p>Loading messages</p>)}
                
              
            </main>

            
        </div>
    );
};


async function deleteContact(contactItem, object)
{
    const contact = contactItem;
    const element = document.getElementById(object);
    element.remove();
    try {
        const response = await axios.post("http://localhost:4000/contact/delete", contact, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log("Data sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
}

export default AdminContact;
