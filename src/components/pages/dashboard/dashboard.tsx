import React from 'react';
import ControlBar from './controlbar/controlbar';
import MainArea from './mainarea/mainarea';
import MainBox from './activity/mainbox';

const DashBoard: React.FC = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2'><ControlBar/></div>
            <div className='col-span-8'><MainArea/></div>
            <div className='col-span-2 bg-gray-100'><MainBox/></div>
        </div>
    );
};

export default DashBoard;
