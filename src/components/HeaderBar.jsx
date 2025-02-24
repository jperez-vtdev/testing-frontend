import React from 'react';
import ThreeDotsMenu from './ThreeDotsMenu/ThreeDotsMenu';

const HeaderBar = ({
  bgColor = 'bg-[#056000]',
  title = 'Bull Alert',
  icon = '',
  items = [],
}) => {
  return (
    <div
      className={`${bgColor} flex items-center justify-between py-2 px-3 rounded-md shadow-lg w-full mb-2 h-[60px]`}
    >
      <div className='flex items-center space-x-2'>
        <div className='flex items-center justify-center'>
          <img src={icon} alt='Image Icon' />
        </div>
        <h1 className='text-white text-2xl lg:text-4xl'>{title}</h1>
      </div>
      <ThreeDotsMenu items={items} />
    </div>
  );
};

export default HeaderBar;
