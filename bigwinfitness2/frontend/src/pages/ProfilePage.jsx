import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const ProfilePage = () => {
    const { userData, logout } = useContext(AuthContext);
    const [newUserRequests, setNewUserRequests] = useState([]);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const fetchNewUserRequests = async () => {
            try {
                const response = await fetch(`http://localhost:3001/requestsForAccess`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    setNewUserRequests(data);

                    // Show a notification if there are new requests
                    if (data.length > 0) {
                        setNotification(`${data.length} new user request(s) pending approval.`);
                    }
                } else {
                    console.error('Failed to fetch new user requests');
                }
            } catch (error) {
                console.error('Error fetching new user requests:', error);
            }
        };

        fetchNewUserRequests();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-sm font-semibold text-gray-600">Username</h2>
                        <p className="text-gray-800">{userData?.username || 'N/A'}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-600">Email</h2>
                        <p className="text-gray-800">{userData?.email || 'N/A'}</p>
                    </div>
                </div>
                <button
                    onClick={logout}
                    className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>

            {/* Notification Section */}
            {notification && (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 w-full max-w-md">
                    <p>{notification}</p>
                </div>
            )}

            {/* New User Requests Section */}
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-4">New User Requests</h2>
                {newUserRequests.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2 text-left">First Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Last Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newUserRequests.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{ user.firstname}</td>
                                    <td className="border border-gray-300 px-4 py-2">{ user.lastname}</td>
                                    <td className="border border-gray-300 px-4 py-2">{ user.whystatement}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-600">No new user requests at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;