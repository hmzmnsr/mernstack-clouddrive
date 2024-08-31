import React from 'react';
import Container from '../../components/containers/fluid.container';
import FlexContainer from '../../components/containers/flex.container';
import SignUpImage from "../../assets/images/signup-image.jpg";
import SignUpForm from '../../components/forms/signup.form';
import Logo from '../../components/common/logo.common';
import { Link } from 'react-router-dom';


const SignUpPage: React.FC = () => {
    return (
        <Container className="flex flex-row flex-wrap">
            <FlexContainer className="w-1/2 h-screen">
                <img src={SignUpImage} alt='signup' className='h-full w-full object-cover' />
            </FlexContainer>
            <FlexContainer className="w-1/2 flex-col justify-center items-center ">
                <Logo />
                <div className='mb-8 mt-2 w-full flex justify-center items-center'>
                    <h3 className='text-2xl text-customBlue font-semibold  text-center '>
                        Get Started with Us—Create Your Account in Minutes!
                    </h3>
                </div>
                <SignUpForm />
                <div className="text-base pb-5 pt-8">
                    <h3 className="text-customBlue">
                        Have an account?{" "}
                        <Link to="/login" className="text-customBlueTwo hover:text-red-500">
                            Sign In Here!
                        </Link>
                    </h3>
                </div>
            </FlexContainer>

        </Container>
    )
}

export default SignUpPage;