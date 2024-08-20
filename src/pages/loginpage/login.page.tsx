import { Link } from "react-router-dom";
import LoginCloudImg  from "../../assets/images/logincloudimg.jpg";
import CopyRight from "../../components/common/copyright.common";
import Logo from "../../components/common/logo.common";
import Social from "../../components/common/social.common";
import FlexContainer from "../../components/containers/flex.container";
import Container from "../../components/containers/fluid.container";
import LoginForm from "../../components/forms/login.form";

const LoginPage = () => {
  return (
    <Container className="flex flex-row flex-wrap">

      <FlexContainer className="w-3/6 flex-col justify-center items-center mt-14 ">
        <Logo />
        <div className="my-2"></div>
        <LoginForm /> 

        <FlexContainer className="flex-row items-center justify-center my-7">
          <div className="border-t border-customBlue flex-grow ml-10 w-full h-3"></div>
          <span className="px-4 text-base text-customBlue">OR</span>
          <div className="border-t border-customBlue flex-grow mr-10 w-full h-3"></div>
        </FlexContainer>

        <h3 className="text-customBlue font-mono text-base text-center mb-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-customBlueTwo hover:text-red-500">
            Sign Up Here!
          </Link>
        </h3>

        <Social />

        <CopyRight />
      </FlexContainer>

      <FlexContainer className="w-2/6 mt-14 flex-col justify-center items-center">
        <div className="text-customBlue text-4xl font-semibold tracking-wide subpixel-antialiased text-center leading-relaxed font-paintbrush">
          Securely Upload and Store Your Important Documents With CLoudDrive!
        </div>
        <img src={LoginCloudImg} alt="logo" />
      </FlexContainer>
      
      <FlexContainer className="w-1/6 flex-col justify-center items-center ">
      <div></div>
      </FlexContainer>
    </Container>
  );
};

export default LoginPage;
