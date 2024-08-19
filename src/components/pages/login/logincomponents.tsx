import React from 'react';
import OrBorders from './orborders';
import Social from './social';
import CopyRight from './copyright';
import Logo from './logo';
import LoginForm from './loginform';
import NoAccount from './noaccount';

const LoginComponents: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <Logo/>
            <LoginForm/>
            <OrBorders/>
            <NoAccount/>
            <Social/>
            <CopyRight/>
            <div className='mt-10'></div>
        </div>
    );
}

export default LoginComponents;

