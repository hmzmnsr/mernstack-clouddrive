import React from 'react';

const StorageShow: React.FC = () => {
    const totalStorage = 60;
    const usedStorage = 10;
    const percentageUsed = (usedStorage / totalStorage) * 100;

    return (
        <div className="text-white px-5">
            <p className='py-3 tracking-wide font-sans leading-loose'>Storage:</p>
            <div className="w-full bg-black rounded-full h-3">
                <div
                    className="bg-white h-3 rounded-full"
                    style={{ width: `${percentageUsed}%` }}
                ></div>
            </div>
            <p className='py-3 tracking-wide font-sans leading-loose'>{usedStorage} GB of {totalStorage} GB used</p>
        </div>
    );
}

export default StorageShow;
