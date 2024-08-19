import React from "react";
import Tagline from "./Tagline";
import LoginComponents from "./logincomponents";



const LoginPage: React.FC = () => {
    return(
        <div className='grid grid-cols-12 h-screen'>
            <div className="col-span-1 "></div>
            <div className='col-span-4 '><LoginComponents/></div>
        
            <div className='col-span-6 '><Tagline/></div>
            <div className="col-span-1 "></div>
        </div>
    );
};

export default LoginPage;