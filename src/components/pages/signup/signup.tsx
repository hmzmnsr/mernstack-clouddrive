import React from 'react';
import signupimg from '../../../assets/images/signup-image.jpg';
import signuplogo from '../../../assets/images/signuplogo.png';
import InputField from '../../inputs/signupforminput.tsx/signupforminput';
import Container from '../../containers/fluid';
import MyButton from '../../buttons/button';

const SignUpPage: React.FC = () => {
  return (
    <>
      <div className='flex flex-row'>
        {/* Image div */}
        <div className='w-2/4 h-screen'>
          <img src={signupimg} alt='signup' className='h-full w-full object-cover'/>
        </div>

        {/* Registration form div */}
        <Container className='h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 shadow-black-500/50 flex-1'>
          <div className='h-5/6 bg-white w-5/6 flex items-center flex-col'>
            <div className='h-custom w-custom'>
              <img src={signuplogo} alt='logo'/>
            </div>
            <div className=''>
              <h1 className='text-3xl bg-gradient-text font-mono font-bold'>Sign Up</h1>
            </div>
            <div className='text-lg bg-gradient-text font-mono font-bold pb-3 pt-2'>
              <h3>Get Started with Us—Create Your Account in Minutes!</h3>
            </div>
            <form className="max-w-md mx-auto">
              <InputField type="email" name="floating_email" id="floating_email" label="Email address" required />
              <InputField type="password" name="floating_password" id="floating_password" label="Password" required />
              <InputField type="password" name="repeat_password" id="floating_repeat_password" label="Confirm password" required />
              <div className="grid md:grid-cols-2 md:gap-6">
                <InputField type="text" name="floating_first_name" id="floating_first_name" label="First name" required />
                <InputField type="text" name="floating_last_name" id="floating_last_name" label="Last name" required />
              </div>
              <InputField type="tel" name="floating_phone" id="floating_phone" label="Phone number (123-456-7890)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              <MyButton text="Submit" onclick={()=> alert("hello world")}/>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUpPage;
