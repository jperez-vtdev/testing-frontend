import React, { useState, useEffect } from 'react';
import CalendarIcon from '../../../assets/icons/calendar.svg';
import ClockIcon from '../../../assets/icons/clock.svg';

const DashboardHeader = () => {
  const [selectedTime, setSelectedTime] = useState('15 min');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const timeOptions = ['15 min', '30 min', '1 hora', '2 horas', '1 día'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dayOfWeek = currentDateTime
    .toLocaleDateString('en-US', {
      weekday: 'long',
    })
    .toUpperCase();

  const day = currentDateTime.getDate().toString().padStart(2, '0');
  const month = currentDateTime
    .toLocaleDateString('en-US', {
      month: 'short',
    })
    .toUpperCase();
  const year = currentDateTime.getFullYear();

  const formattedDate = ` ${month}-${day}-${year}`;

  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const gmtOffset = `GMT${-currentDateTime.getTimezoneOffset() / 60}`;

  const handleChangeTime = () => {
    const currentIndex = timeOptions.indexOf(selectedTime);
    const nextIndex = (currentIndex + 1) % timeOptions.length;
    setSelectedTime(timeOptions[nextIndex]);
  };

  return (
    <div className='flex flex-col md:flex-row items-start lg:items-center gap-4 lg:gap-0 justify-between py-2 text-white rounded-md'>
      <div className='flex items-center space-x-4'>
        <span className='text-2xl lg:text-[2.5rem] lg:leading-[2.5rem] font-bold'>
          DASHBOARD
        </span>
        <div className='flex flex-col md:flex-row items-start lg:items-center space-x-2'>
          <button
            onClick={handleChangeTime}
            className='text-[#EABC4D] text-base md:text-2xl hover:underline focus:outline-none'
          >
            Change
          </button>
          <span className='text-white text-base md:text-2xl'>
            {selectedTime}
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-1 xl:flex-row xl:gap-0 items-start xl:items-center'>
        <div className='flex items-center'>
          <img
            src={CalendarIcon}
            altl='calendar icon'
            className='w-5 h-5 lg:w-9 lg:h-9 text-white mr-5'
          />
          <div className='flex items-center text-white xl:ml-5 space-x-3'>
            <span className='text-base md:text-2xl font-bold lg:text-4xl'>{`${dayOfWeek}  `}</span>
            {` `}
            <span className='text-base md:text-2xl lg:text-4xl'>
              {formattedDate}
            </span>
          </div>
        </div>
        <div className='flex items-center lg:ml-16'>
          <img
            src={ClockIcon}
            alt='clock'
            className='w-5 h-5 lg:w-9 lg:h-9 text-white mr-5'
          />
          <span className='text-base md:text-2xl lg:text-4xl'>
            {formattedTime} {gmtOffset}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
