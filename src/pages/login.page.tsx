import { Link } from "react-router-dom";
import cloudimg from "../assets/images/cloudimgg.jpg";
import CopyRight from "../components/common/copyright.common";
import Logo from "../components/common/logo.common";
import Social from "../components/common/social.common";
import FlexContainer from "../components/containers/flex.container";
import Container from "../components/containers/fluid.container";
import LoginForm from "../components/forms/login.form";

const LoginPage = () => {
  return (
    <Container className="flex flex-row flex-wrap">
      <FlexContainer className="w-1/2 flex-col items-center px-36 py-10">
        <Logo />
        <LoginForm />
        <FlexContainer className="flex-row items-center justify-center mt-10">
          <div className="border-t border-customBlue flex-grow ml-40 h-0.5"></div>
          <span className="px-4 text-sm text-customBlue">OR</span>
          <div className="border-t border-customBlue flex-grow mr-40 h-0.5"></div>
        </FlexContainer>
        <h3 className="text-customBlue font-mono font-light text-sm my-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-customBlueTwo hover:text-red-500">
            Sign Up Here!
          </Link>
        </h3>
        <Social />
        <CopyRight />
      </FlexContainer>
      <FlexContainer className="w-1/2 flex-col justify-center items-center mt-24">
        <div className="text-customBlue text-4xl font-semibold tracking-wide subpixel-antialiased text-center leading-relaxed font-paintbrush">
          Securely Upload and Store Your Important Documents With CLoudDrive!
        </div>
        <img src={cloudimg} className="w-3/4" alt="logo" />
      </FlexContainer>
    </Container>
  );
};

export default LoginPage;
