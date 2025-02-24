import React from 'react';

const LineWithDot = () => {
  return (
    <div className='flex items-center w-full'>
      <div className='w-2 h-2 bg-[#EABC4D] rounded-full flex-shrink-0' />
      <div className='h-[2px] bg-[#EABC4D] flex-grow ml-0' />
    </div>
  );
};

export default LineWithDot;
