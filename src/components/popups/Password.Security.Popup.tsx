import React from "react";

interface PasswordSecurityPopupProps {
    profile: {
        email: string;
    };
    onClose: () => void;
}

const PasswordSecurityPopup: React.FC<PasswordSecurityPopupProps> = ({ profile, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-1/2 p-14">
                <div className="flex justify-between items-center border-b mx-4">
                    <h2 className="text-lg font-semibold">Password and Security</h2>
                </div>
                <div className="mx-5 my-5">
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Email Address</label>
                            <div className="mt-1 block w-full px-3 py-2 border rounded-md bg-gray-100">
                                {profile.email}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Old Password</label>
                            <input 
                                type="password" 
                                className="mt-1 block w-full px-3 py-2 border rounded-md" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">New Password</label>
                            <input 
                                type="password" 
                                className="mt-1 block w-full px-3 py-2 border rounded-md" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Confirm New Password</label>
                            <input 
                                type="password" 
                                className="mt-1 block w-full px-3 py-2 border rounded-md" 
                            />
                        </div>
                        <button
                            className="bg-gray-500 text-white py-2 px-8 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-customBlueTwo text-white py-2 px-10 rounded">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PasswordSecurityPopup;
