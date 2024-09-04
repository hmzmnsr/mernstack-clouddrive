import React from "react";
import profilepic from "../../assets/images/profilepic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface PersonalDetailsPopupProps {
    profile: {
        name: string;
        phone: string;
        // dob: string; // Added dob to the profile interface
    };
    onClose: () => void;
}

const PersonalDetailsPopup: React.FC<PersonalDetailsPopupProps> = ({ profile, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-1/2 p-14">
                <div className="flex justify-between items-center border-b mx-4">
                    <h2 className="text-lg font-semibold">Edit Personal Details</h2>
                </div>
                <div className="mx-5 my-5">
                    <form>
                        <div className="flex flex-col items-center mt-7 mb-4">
                            <div className="relative">
                                <img src={profilepic} className="h-44 w-44 rounded-full" />
                                <button
                                    type="button"
                                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs py-2 rounded-b-full flex items-center justify-center"
                                    style={{
                                        borderTopLeftRadius: '0',
                                        borderTopRightRadius: '0',
                                        borderBottomLeftRadius: '50%',
                                        borderBottomRightRadius: '50%',
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEdit} className="mr-2" />
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border rounded-md"
                                defaultValue={profile.name}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Phone Number</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border rounded-md"
                                defaultValue={profile.phone}
                            />
                        </div>
                        <div className="mb-7">
                            <label className="block text-sm font-semibold mb-2">Date of Birth</label>
                            <div
                                className="mt-1 block w-full px-3 py-2 border rounded-md cursor-pointer"
                                onClick={(e) => e.currentTarget.querySelector('input')?.focus()}
                            >
                                <input
                                    type="date"
                                    className="w-full pointer-events-none"
                                // defaultValue={profile.dob}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-gray-500 text-white py-2 px-8 rounded mr-2"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="bg-customBlueTwo text-white py-2 px-10 rounded">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetailsPopup;
