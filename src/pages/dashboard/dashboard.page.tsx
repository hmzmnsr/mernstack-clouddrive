import FlexContainer from "../../components/containers/flex.container";
import ControlBar from "../../components/sidebar/sidebar";
import MainArea from "./mainarea/mainarea";

const DashboardPage = () => {
  return (
    <FlexContainer className="w-full flex-row">
      <FlexContainer className="w-2/12">
        <ControlBar />
      </FlexContainer>
      <FlexContainer className="w-10/12">
        <MainArea />
      </FlexContainer>
    </FlexContainer>
  );
};

export default DashboardPage;
