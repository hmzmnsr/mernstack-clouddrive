import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../../redux/actions/user.action";
import { setProfile } from "../../../redux/reducers/profile.reducer";
import ControlBar from "./controlbar/controlbar";
import MainArea from "./mainarea/mainarea";

const DashBoard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeDashboard = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
      } else {
        const profileData = await getUserProfile();
        if (profileData) {
          dispatch(setProfile(profileData));
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    };

    initializeDashboard();
  }, [dispatch, navigate]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2"><ControlBar /></div>
      <div className="col-span-10"><MainArea /></div>
    </div>
  );
};

export default DashBoard;
