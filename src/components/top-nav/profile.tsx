import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/store";

const ProfileName: React.FC = () => {
  // Use the correct type for the Redux state
  const profileState = useSelector((state: RootState) => state.Profile);

  const { profile } = profileState;

  return (
    <div className="pl-16 pt-3 text-xl font-bold tracking-wide font-sans leading-loose">
      Welcome Back {profile?.name ?? ""}
    </div>
  );
};

export default ProfileName; 
