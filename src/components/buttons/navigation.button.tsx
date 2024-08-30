import React, { useState } from 'react';
import { BellIcon} from '@heroicons/react/24/solid';

const NavigationButtons: React.FC = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
        setShowNotifications(false); // Close notifications dropdown
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowProfile(false); // Close profile dropdown
    };

    return (
        <div className="flex items-center justify-center">
            {/* Notification Bell Button */}
            <div className="relative px-6 pt-4  ">
                <button onClick={toggleNotifications} className="relative">
                    <BellIcon className="h-8 w-8 text-customBlueTwo" />
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
                        <div className="px-4 py-2 text-gray-700">You have no new notifications.</div>
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
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                        <div className="px-4 py-2">
                            <p className="text-sm text-gray-900">John Doe</p> {/* Replace with actual name */}
                            <p className="text-sm text-gray-500">johndoe@example.com</p> {/* Replace with actual email */}
                        </div>
                        <hr className="my-2" />
                        <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            View Profile
                        </a>

                    </div>
                )}
            </div>
        </div>
    );
};

export default NavigationButtons;
