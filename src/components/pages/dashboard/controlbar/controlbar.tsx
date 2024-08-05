import React from 'react';
import LogoHeading from './logoheading';
import Actions from './actions';
import ControlBarButton from './button';


const ControlBar : React.FC = () => {
 return (
    <>
    <div className='min-h-screen w-80 bg-gradient-to-b from-cyan-500 to-blue-500 pb-10'>
        <LogoHeading/>
        <Actions/>
        <ControlBarButton/>
    </div>
    </>
 );
};

export default ControlBar;
