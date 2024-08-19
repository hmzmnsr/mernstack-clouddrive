import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faStar, faClock, faShare, faTrash, faCog, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Actions: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='mt-8 text-white text-lg font-light w-full'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center py-4 px-9 cursor-pointer hover:bg-gray-200 hover:bg-opacity-50 rounded' onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faFile} className='pr-3'/>
                      <p>All Files</p>
                    <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className='ml-3' />
                </div>
                {isDropdownOpen && (
                    <div className='mx-10 border-l'>
                        <div className='flex flex-row items-center px-4 py-2 mx-2  hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                            <p>My Files</p>
                        </div>
                        <div className='flex flex-row items-center px-4 py-2 mx-2 hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                            <p>Team Folder</p>
                        </div>
                        <div className='flex flex-row items-center px-4 py-2 mx-2 hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                            <p>References</p>
                        </div>
                        <div className='flex flex-row items-center px-4 py-2 mx-2 hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                            <p>Documents</p>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex flex-row items-center py-4 px-8 hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                <FontAwesomeIcon icon={faStar} className='pr-2'/>
                <p>Favorites</p>
            </div>
            <div className='flex flex-row items-center py-4 px-8 hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                <FontAwesomeIcon icon={faClock} className='pr-2'/>
                <p>Recents</p>
            </div>
            <div className='flex flex-row items-center py-4 px-8 hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                <FontAwesomeIcon icon={faShare} className='pr-2'/>
                <p>Shared With Me</p>
            </div>
            <div className='flex flex-row items-center py-4 px-8 hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                <FontAwesomeIcon icon={faTrash} className='pr-2'/>
                <p>Deleted Files</p>
            </div>
            <div className='flex flex-row items-center py-4 px-8 hover:bg-gray-200 hover:bg-opacity-50 rounded'>
                <FontAwesomeIcon icon={faCog} className='pr-2'/>
                <p>Settings</p>
            </div>
        </div>
    );
};

export default Actions;
