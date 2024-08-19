import React from 'react';

const OrBorders: React.FC = () => {
    return(
        <div className="flex items-center justify-center mt-10 w-full">
        <div className="border-t border-customBlue flex-grow ml-40" style={{ height: '2px' }}></div>
        <span className="px-4 text-sm text-customBlue">OR</span>
        <div className="border-t border-customBlue flex-grow mr-40" style={{ height: '2px' }}></div>
      </div>
    );
}

export default OrBorders;