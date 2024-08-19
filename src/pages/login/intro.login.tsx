import cloudimg from "../../assets/images/cloudimgg.jpg";
import FlexContainer from "../../components/containers/flex.container";

const LoginIntro = () => {
  return (
    <FlexContainer className="w-1/2 flex-col justify-center items-center mt-24">
      <div className="text-customBlue text-4xl font-semibold tracking-wide subpixel-antialiased text-center  leading-relaxed font-paintbrush">
        Securely Upload and Store Your Important Documents With CLoudDrive!
      </div>
      <img src={cloudimg} className="w-3/4" alt="logo" />
    </FlexContainer>
  );
};

export default LoginIntro;
