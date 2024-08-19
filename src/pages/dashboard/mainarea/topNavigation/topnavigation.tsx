import React from 'react';
import ProfileName from './profilename';
import SearchBar from './searchbar';
import NavigationButtons from './navigationbuttons';

const TopNavigation: React.FC = () => {
    return(
        <div className='grid grid-cols-12 h-20 bg-white'>
           <div className='col-span-5'><ProfileName/></div>
           <div className='col-span-5'><SearchBar/></div>
           <div className='col-span-2'><NavigationButtons/></div>
        </div>
    );
}

export default TopNavigation;