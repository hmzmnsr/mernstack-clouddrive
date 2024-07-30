import React from 'react';
import Container from '../../containers/fluid';
import datacenterclip from '../../../assets/videos/datacenterclip.mp4';
import loginlogo from '../../../assets/images/loginlogo.png';
import InputField from '../../inputs/loginforminput/loginforminput';
import MyButton from '../../buttons/button';
import TypewriterEffect from './typewriter';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden flex flex-row">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src={datacenterclip} autoPlay loop muted playsInline />

        <div className="absolute top-16 left-20 z-10 w-3/6 h-full">
          <div className='text-6xl tracking-wide font-mono leading-loose  bg-gradient-text'>Welcome to CloudDrive</div>
          <div className='text-3xl tracking-wide font-mono mb-6 bg-gradient-text'>Your Ultimate Digital Storage Solution</div>
          <TypewriterEffect text="Easily upload, store, and access your files from anywhere with CloudDrive. Seamlessly integrated for all your needs, our platform ensures that your data is always secure and just a click away. Join us today and experience the future of cloud storage." />
        </div>

        <Container className='flex flex-col justify-start items-center bg-black bg-opacity-70 w-2/6 h-full absolute right-10'>
          <div className='h-custom2 w-custom2 mt-16 mb-8'>
            <img src={loginlogo} alt='logo' />
          </div>
          <div>
            <h1 className='text-3xl bg-gradient-text font-mono font-bold'>Login</h1>
          </div>
          <div>
            <h3 className='text-lg bg-gradient-text font-mono font-bold pb-5 pt-3'>Log In to Continue Your Journey</h3>
          </div>
          <form className="max-w-md mx-auto">
            <InputField type="email" name="floating_email" id="floating_email" label="Email address" required />
            <InputField type="password" name="floating_password" id="floating_password" label="Password" required />
            <MyButton text="Submit" onclick={() => alert("hello world")} />
          </form>
          <div className="font-mono pb-5 pt-12">
            <h3 className='text-white'>
              Got no account? <Link to="/signup" className="text-blue-500 hover:text-red-400">Sign Up Here!</Link>
            </h3>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
