import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../redux/reducers/store";
import { logOut } from '../../redux/reducers/profile.reducer';
import { useNavigate } from 'react-router-dom';

const NavigationButtons: React.FC = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const profile = useSelector((state: RootState) => state.Profile.profile);
    const isAuthenticated = useSelector((state: RootState) => state.Profile.isAuthenticated);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
        setShowNotifications(false); // Close notifications dropdown
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowProfile(false); // Close profile dropdown
    };

    const handleLogout = () => {
        dispatch(logOut());
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="flex items-center justify-center absolute z-20">
            {/* Notification Bell Button */}
            <div className="relative px-6 pt-4">
                <button onClick={toggleNotifications} className="relative">
                    <BellIcon className="h-8 w-8 text-customBlueTwo" />
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-md shadow-lg py-4 z-10">
                        <div className="px-4 py-2 text-base text-gray-700">You have no new notifications.</div>
                        {/* Add more notifications here */}
                        <div className="px-4 py-2 hover:bg-gray-100">Notification 1</div>
                        <div className="px-4 py-2 hover:bg-gray-100">Notification 2</div>
                        <div className="px-4 py-2 hover:bg-gray-100">Notification 3</div>
                    </div>
                )}
            </div>

            {/* Profile Picture Button */}
            <div className="relative pt-2">
                <button onClick={toggleProfile} className="flex items-center space-x-2">
                    <img
                        src="https://via.placeholder.com/40" // Replace with actual profile picture URL
                        alt="Profile"
                        className="h-8 w-8 rounded-full"
                    />
                </button>

                {/* Profile Dropdown */}
                {showProfile && (
                    <div className="absolute left-1/2 trasnform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-4 z-10">
                        {isAuthenticated && profile && (
                            <>
                                <div className="px-4 py-2 bg-blue-100">
                                    <p className="text-base font-semibold text-gray-900">{profile.name}</p> {/* Display user name */}
                                    <p className="text-base font-semibold text-gray-500">{profile.email}</p> {/* Display user email */}
                                </div>
                                <hr className="my-2" />
                                <a href="/profile" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
                                    View Profile
                                </a>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-base text-red-600 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavigationButtons;
