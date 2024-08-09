import { useSelector } from "react-redux";
import React from 'react';
import { RootState } from "../../../../redux/reducers/store";

const ProfileName: React.FC = () => {
    // Use the correct type for the Redux state
    const profileState = useSelector((state: RootState) => state.Profile);

    const { profile } = profileState;

    return (
        <div 
            className="text-2xl tracking-wide font-sans font-light leading-loose rounded-full
            text-white bg-black my-2 mx-80 flex justify-center items-center py-1">
            Welcome Back {profile?.name ?? ""}
        </div>
    );
}

export default ProfileName;
