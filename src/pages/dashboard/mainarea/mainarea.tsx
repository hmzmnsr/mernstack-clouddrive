import React from 'react';
import TopNavigation from './topNavigation/topnavigation';
import AllFolders from './folders/folders';
import FilesArea from './files/allfiles';

const MainArea: React.FC = () => {

    return (
        <div className='bg-gray-100 w-full'>
            <TopNavigation/>  
            <AllFolders/>
            <FilesArea/>
        </div>
    );
};

export default MainArea;
