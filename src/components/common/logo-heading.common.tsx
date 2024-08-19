import cloudlogo from "../../assets/images/cloud.jpg";
import FlexContainer from "../containers/flex.container";

const LogoHeading = () => {
  return (
    <FlexContainer className="w-full flex-row items-center justify-center pt-10 rounded-b-3xl">
      <img src={cloudlogo} className="h-custom3 w-custom3 mr-4" alt="logo" />
      <h2 className="text-2xl tracking-wide font-sans leading-loose text-white">
        CloudDrive
      </h2>
    </FlexContainer>
  );
};

export default LogoHeading;
