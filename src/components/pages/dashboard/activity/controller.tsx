import React, { useState } from 'react';
import Details from "./details";
import Activity from "./activity";
import Comments from "./comments";

const Controller: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string | null>(null);

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex w-full justify-center items-center mb-4">
                <button
                    className={`flex-1 py-4 bg-gradient-to-b from-cyan-500 to-blue-500 text-white ${selectedTab === "Details" && "opacity-75"}`}
                    onClick={() => setSelectedTab("Details")}
                >
                    Details
                </button>
                <button
                    className={`flex-1 py-4 bg-gradient-to-b from-cyan-500 to-blue-500 text-white ${selectedTab === "Activity" && "opacity-75"}`}
                    onClick={() => setSelectedTab("Activity")}
                >
                    Activity
                </button>
                <button
                    className={`flex-1 py-4 bg-gradient-to-b from-cyan-500 to-blue-500 text-white ${selectedTab === "Comments" && "opacity-75"}`}
                    onClick={() => setSelectedTab("Comments")}
                >
                    Comments
                </button>
            </div>

            <div className="w-full px-4">
                {selectedTab === "Details" && <Details />}
                {selectedTab === "Activity" && <Activity />}
                {selectedTab === "Comments" && <Comments />}
            </div>
        </div>
    )
}


export default Controller;

