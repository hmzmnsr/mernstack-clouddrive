import React from 'react';
import FilesHeading from './heading';
import FilesViewHeading from './filesviewheading';
import FilesViewArea from './filesview';


const FilesArea: React.FC = () => {
    return(
        <div>
            <FilesHeading/>
            <FilesViewHeading/>
            <FilesViewArea/>
       
        </div>
    )
}

export default FilesArea; 