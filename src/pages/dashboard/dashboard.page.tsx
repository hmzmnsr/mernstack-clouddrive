import React, { useState } from "react";
import FlexContainer from "../../components/containers/flex.container";
import SideBar from "../../components/sidebar/sidebar";
import MainArea from "./mainarea/mainarea";

const DashboardPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("Home");

  return (
    <FlexContainer className="w-full flex-row">
      <FlexContainer className="w-2/12">
        <SideBar
          setSelectedSection={setSelectedSection}
          selectedSection={selectedSection}
        />
      </FlexContainer>
      <FlexContainer className="w-10/12">
        <MainArea selectedSection={selectedSection} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default DashboardPage;
