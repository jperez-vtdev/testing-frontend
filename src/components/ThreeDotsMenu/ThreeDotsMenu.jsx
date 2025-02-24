import React, { useState } from 'react';

const ThreeDotsMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative inline-block text-left z-10'>
      <button
        onClick={toggleMenu}
        className='p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 16 16'
          className='w-5 h-5 text-white'
        >
          <path d='M7.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
        </svg>
      </button>

      {isOpen && (
        <div
          className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
        >
          <div className='py-1' role='none'>
            {items?.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                role='menuitem'
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDotsMenu;
