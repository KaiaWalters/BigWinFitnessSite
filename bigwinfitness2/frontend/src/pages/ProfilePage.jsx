import React, { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const ProfilePage = () => {
    const [newUserRequests, setNewUserRequests] = useState([]);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const fetchNewUserRequests = async () => {
            try {
                const response = await fetch(`http://localhost:3001/users`);
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

    const handleValidation = async (e, user) => {
        const button = e.target.id
        //TODO: refactor this so only the backend is responsible for updating the ser status on a user. 
        //TODOD: extract fetch requests into a separate file 
        if(button === "validate_approve"){
            console.log("HIT")
            try {
                const response = await fetch('http://localhost:3001/validateRequests', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({...user, status: "invited"}),
                })
                console.log("RESPONSE", response)

            }catch(error){
                console.log(error)
            }
         
        }else if( button === "validate_reject"){
            try {
                const response = await fetch('http://localhost:3001/validateRequests', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({...user, status: "rejected"}),
                })
    
                console.log("RESPONSE",response)

            }catch(error){
                console.log(error)
            }
         
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">

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
                                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Validate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newUserRequests.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{ user.firstname}</td>
                                    <td className="border border-gray-300 px-4 py-2">{ user.lastname}</td>
                                    <td className="border border-gray-300 px-4 py-2">{ user.whystatement}</td>
                                    <td className="border border-gray-300 px-4 py-2">{ user.status}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button id="validate_approve" className="border-black bg-green-100 px-6 py-3" onClick={(e) => handleValidation(e, user)}>Approve</button>
                                        <button id="validate_reject" className="border-black bg-red-100 px-6 py-3" onClick={(e) => handleValidation(e, user)}>Reject</button>
                                    </td>
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