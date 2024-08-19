import cloudimg from "../../assets/images/cloudimgg.jpg";
import FlexContainer from "../../components/containers/flex.container";

const LoginIntro = () => {
  return (
    <FlexContainer className="w-1/2 flex-col mt-48">
      <div className="text-customBlue text-4xl font-semibold tracking-wide subpixel-antialiased text-center  leading-relaxed font-paintbrush">
        Securely Upload and Store Your Important Documents With CLoudDrive!
      </div>
      <FlexContainer className="justify-center items-center">
        <img src={cloudimg} className="h-4/4 w-4/4" alt="logo" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default LoginIntro;
