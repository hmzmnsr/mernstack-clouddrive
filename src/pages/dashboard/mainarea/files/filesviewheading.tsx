import React from 'react';

const FilesViewHeading: React.FC = () => {
    return(
        <div className='grid grid-cols-12 mt-3 bg-white'>
            <div className='col-span-2 w-full h-full flex text-lg items-center justify-center font-semibold'>Name</div>
            <div className='col-span-2 w-full h-full flex items-center justify-center text-lg font-semibold'>File Size</div>
            <div className='col-span-2 w-full h-full flex items-center justify-center text-lg font-semibold'>Last Modified</div>
            <div className='col-span-2 w-full h-full flex items-center justify-center text-lg font-semibold'>Owner Name</div>
            <div className='col-span-3 w-full h-full flex items-center justify-center text-lg font-semibold'>Who Can Access</div>
            <div className='col=span-2'></div>
        </div>
    )
}

export default FilesViewHeading;
