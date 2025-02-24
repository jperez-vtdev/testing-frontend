import React from 'react';

import './NewsCard.css';

const NewsCard = ({ time, title, description, link }) => {
  return (
    <div className='flex justify-center min-h-[128px] mb-2'>
      <div className='flex items-center justify-center bg-[#2C2D31] text-white border border-[#FFFFFFCC] rounded-md h-auto min-w-[92px] mr-4'>
        <p className='text-lg font-bold'>{time}</p>
      </div>

      <div className='flex-1 flex flex-col items-center justify-center bg-[#2C2D31] text-white border border-[#FFFFFFCC] rounded-md p-4'>
        <h3 className='text-white font-bold text-xl mb-1'>{title}</h3>
        <p className='text-gray-400 text-lg text-white'>{description}</p>
        <div className='flex justify-end items-end ml-4 text-gray-400 hover:text-white cursor-pointer text-right w-full'>
          <img src={''} alt='Link Icon' />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
