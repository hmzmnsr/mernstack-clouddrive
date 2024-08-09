import React from "react";
import Controller from "./controller";
import LogoutButton from "./logout";

const MainBox: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <div><Controller /></div>
            <div className="flex flex-row justify-center mt-auto"><LogoutButton /></div>
        </div>
    );
};

export default MainBox;
