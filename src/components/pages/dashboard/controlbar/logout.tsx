import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../../redux/reducers/profile.reducer";

const LogoutButton: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logOut());
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <button onClick={handleLogout} className="w-3/5 mx-auto bg-customBlueTwo text-white py-3 rounded-xl hover:bg-red-700">
          Logout
        </button>
    );
};

export default LogoutButton;
