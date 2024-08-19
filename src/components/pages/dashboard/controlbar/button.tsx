import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateFolderPopup from './createfolder';

const ControlBarButton: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <button 
                className='bg-customBlueTwo text-white w-3/5 py-3 rounded-xl' 
                onClick={handleButtonClick}
            >
                <FontAwesomeIcon icon={faPlus} className='pr-2' />
                Create New
            </button>

            {showPopup && (
                <CreateFolderPopup onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default ControlBarButton;
