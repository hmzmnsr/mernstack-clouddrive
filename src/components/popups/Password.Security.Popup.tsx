import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/reducers/store";
import { updatePassword } from "../../redux/actions/user.action";

interface PasswordSecurityPopupProps {
    profile: {
        email: string;
    };
    onClose: () => void;
}

const PasswordSecurityPopup: React.FC<PasswordSecurityPopupProps> = ({ profile, onClose }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<"success" | "error" | null>(null); // State to track the message type
    const { loading } = useSelector((state: RootState) => state.Profile);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if new password and confirm password match
        if (newPassword !== confirmNewPassword) {
            setMessage("New password and confirm password do not match");
            setMessageType("error");
            return; // Don't clear the error message automatically
        }

        // Dispatch the action to update the password
        dispatch(updatePassword({ oldPassword, newPassword }))
            .unwrap()
            .then(() => {
                setMessage("Password updated successfully");
                setMessageType("success");
                setTimeout(() => {
                    setMessage(null);
                    onClose(); // Close the popup after 3 seconds on success
                }, 3000);
            })
            .catch((error) => {
                setMessage(error || "Incorrect old password");
                setMessageType("error");
                // Do not clear the error message automatically
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-1/2 p-14">
                <div className="flex justify-between items-center border-b mx-4">
                    <h2 className="text-lg font-semibold">Password and Security</h2>
                </div>
                <div className="mx-5 my-5">
                    <form onSubmit={handleSubmit}>
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
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">New Password</label>
                            <input 
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div> 
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Confirm New Password</label>
                            <input 
                                type="password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>

                        {message && (
                            <div
                                className={`mb-4 ${
                                    messageType === "success" ? "text-green-500" : "text-red-500"
                                }`}
                            >
                                {message}
                            </div>
                        )}

                        <button
                            type="button"
                            className="bg-gray-500 text-white py-2 px-8 rounded mr-2"
                            onClick={onClose}
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-customBlueTwo text-white py-2 px-10 rounded"
                            disabled={loading}
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PasswordSecurityPopup;
