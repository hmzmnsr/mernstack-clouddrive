import React from 'react';
import HeadingFile from './heading';
import FolderView from './foldersview';

const AllFolders: React.FC = () => {
    return(
        <div>
            <HeadingFile/>
            <FolderView/>
        </div>
    );
};

export default AllFolders;