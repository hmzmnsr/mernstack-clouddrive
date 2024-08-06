import React from "react";
import { useSelector } from "react-redux";
import { ProfileState } from "../../../../redux/reducers/profile.reducer";
import Actions from "./actions";
import ControlBarButton from "./button";
import LogoHeading from "./logoheading";

const ControlBar: React.FC = () => {
  const Profile: ProfileState = useSelector((state: any) => state.Profile);

  const { profile } = Profile;

  return (
    <>
      <div className="min-h-screen w-80 bg-gradient-to-b from-cyan-500 to-blue-500 pb-10">
        <LogoHeading />
        <h6
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {profile?.name ?? ""}
        </h6>
        <Actions />
        <ControlBarButton />
      </div>
    </>
  );
};

export default ControlBar;
