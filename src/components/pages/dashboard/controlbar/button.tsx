import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ControlBarButton = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <button className='bg-black text-white py-3 px-20 rounded-lg'>
                <FontAwesomeIcon icon={faPlus} className='pr-2' />
                Create New
            </button>
        </div>
    );
};

export default ControlBarButton;
