import React from 'react';
import LineWithDot from './LineWithDot/LineWithDot';

const FormSection = ({ onSubmit = (e) => e.preventDefault() }) => {
  const InputStyles =
    'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB000] placeholder-[#474747]';
  return (
    <div className='flex flex-col items-center justify-between w-full'>
      <div className='w-full text-left mb-5'>
        <div className='flex flex-row gap-2 justify-start items-center'>
          <img src={''} alt='Signals' className='w-20 h-24 mr-3' />
          <div className='w-full xl:min-w-[740px]'>
            <h2 className='w-full text-lg md:text-2xl xl:text-5xl xl:leading[3.5rem] font-black pb-1'>
              ¿Quieres un{' '}
              <span className='text-[#EABC4D]'>mejor plan para ti?</span>
            </h2>
          </div>
          <LineWithDot />
        </div>
      </div>

      <div className='w-full flex flex-col xl:flex-row items-center justify-between gap-6'>
        <form className='space-y-6 w-full' onSubmit={onSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-black'>
            <input
              type='text'
              placeholder='Nombres y apellidos'
              className={InputStyles}
            />
            <input type='text' placeholder='Compañía' className={InputStyles} />
            <input type='email' placeholder='Correo' className={InputStyles} />
            <input type='tel' placeholder='Teléfono' className={InputStyles} />
          </div>
          <textarea
            rows={4}
            placeholder='Escríbenos tu solicitud'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB000] resize-none placeholder-[#474747]'
          ></textarea>
          <div className='text-center'>
            <button
              type='submit'
              className='w-56 xl:w-96 bg-[#FFB000] text-white text-2xl xl:text-4xl xl:font-medium px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors'
            >
              Contáctanos
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
