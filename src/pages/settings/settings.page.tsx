import React, { useState } from "react";
import { useSelector } from "react-redux";
import FlexContainer from "../../components/containers/flex.container";
import { FaEdit } from "react-icons/fa";
import PersonalDetailsPopup from "../../components/popups/personal.details.popup";
import PasswordSecurityPopup from "../../components/popups/Password.Security.Popup"
import { RootState } from "../../redux/reducers/store";
import Welcome from "./welcome";

const SettingsPage: React.FC = () => {
    const profile = useSelector((state: RootState) => state.Profile.profile);

    const [popupVisible, setPopupVisible] = useState<"personalDetails" | "passwordSecurity" | null>(null);

    const openPopup = (section: "personalDetails" | "passwordSecurity") => {
        setPopupVisible(section);
    };

    const closePopup = () => {
        setPopupVisible(null);
    };

    return (
        <FlexContainer className="flex-col justify-center items-center">
            <Welcome />
            <FlexContainer className="py-10">
                {/* Personal Details Section */}
                <div className="h-64 bg-slate-100 border border-gray-200 rounded-lg shadow px-24 py-8 mx-10">
                    <div className="grid grid-cols-12 mb-4">
                        <div className="col-span-11 text-lg font-semibold pb-2">
                            Personal Details
                        </div>
                        <div className="col-span-1 flex justify-end items-start">
                            <button onClick={() => openPopup("personalDetails")}>
                                <FaEdit className="text-customBlue h-5 w-5" />
                            </button>
                        </div>
                    </div>
 
                    <div className="grid grid-cols-12 my-2">
                        <div className="col-span-5 text-base font-semibold">Full Name</div>
                        <div className="col-span-7 pl-5">{profile?.name ?? "N/A"}</div>
                    </div>
                    <div className="grid grid-cols-12 my-2">
                        <div className="col-span-5 text-base font-semibold">Phone Number</div>
                        <div className="col-span-7 pl-5">{profile?.phone ?? "N/A"}</div>
                    </div>
                    <div className="grid grid-cols-12 my-2">
                        <div className="col-span-5 text-base font-semibold">Profile Picture</div>
                        <div className="col-span-7 pl-5">Choose Image</div>
                    </div>
                </div>

                {/* Password and Security Section */}
                <div className="h-64 bg-slate-100 border border-gray-200 rounded-lg shadow px-24 py-8">
                    <div className="grid grid-cols-12">
                        <div className="col-span-11 text-lg font-semibold pb-2">
                            Password and Security
                        </div>
                        <div className="col-span-1 flex justify-end items-start">
                            <button onClick={() => openPopup("passwordSecurity")}>
                                <FaEdit className="text-customBlue h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 my-2">
                        <div className="col-span-5 text-base font-semibold">Email Address</div>
                        <div className="col-span-7 pl-5">{profile?.email ?? "N/A"}</div>
                    </div>
                    <div className="grid grid-cols-12 my-2">
                        <div className="col-span-5 text-base font-semibold">Password</div>
                        <div className="col-span-7 pl-5">********</div> {/* Masked password */}
                    </div>
                </div>


                <div className="h-64 bg-slate-100 border border-gray-200 rounded-lg shadow px-24 py-8 mx-10">
                    <div className="grid grid-cols-12 mb-4">
                        <div className="col-span-11 text-lg font-semibold pb-2">
                            Personal Details
                        </div>
                        <div className="col-span-1 flex justify-end items-start">
                            <button onClick={() => openPopup("personalDetails")}>
                                <FaEdit className="text-customBlue h-5 w-5" />
                            </button>
                        </div>
                    </div>
 
                    <div className="grid grid-cols-12 my-2">
                        <div className="col-span-5 text-base font-semibold">Full Name</div>
                        <div className="col-span-7 pl-5">{profile?.name ?? "N/A"}</div>
                    </div>
                    <div className="grid grid-cols-12 my-2">
                        <div className="col-span-5 text-base font-semibold">Phone Number</div>
                        <div className="col-span-7 pl-5">{profile?.phone ?? "N/A"}</div>
                    </div>
                    <div className="grid grid-cols-12 my-2">
                        <div className="col-span-5 text-base font-semibold">Profile Picture</div>
                        <div className="col-span-7 pl-5">Choose Image</div>
                    </div>
                </div>

                

                {/* Render appropriate Popup based on selected section */}
                {popupVisible === "personalDetails" && profile && (
                    <PersonalDetailsPopup
                        profile={profile}
                        onClose={closePopup}
                    />
                )}

                {popupVisible === "passwordSecurity" && profile && (
                    <PasswordSecurityPopup
                        profile={profile}
                        onClose={closePopup}
                    />
                )}

            </FlexContainer>
        </FlexContainer>
    );
};

export default SettingsPage;
