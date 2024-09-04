import React from "react";
import FlexContainer from "../../components/containers/flex.container";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/store";
import profilepic from "../../assets/images/profilepic.jpg";

const Welcome: React.FC = () => {
    const profileState = useSelector((state: RootState) => state.Profile);

    const { profile } = profileState;

    return (
        <FlexContainer className="flex-col justify-center items-center mt-7"> 
            <div className="h-44 w-44 rounded mt-7 mb-4">
                <img src={profilepic} className="h-44 w-44 rounded-full"/>
            </div>
            <div className="text-2xl text-customBlue font-bold my-2">
                Welcome, {profile?.name ?? ""}
            </div>
            <div className="text-customBlue text-xl font-semibold my-2">
                Manage your personal details and security to make OneDrive work better for you.
            </div>
        </FlexContainer>
    )
}

export default Welcome;