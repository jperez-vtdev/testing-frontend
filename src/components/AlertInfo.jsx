import React from 'react';
import MiddleAIImage from '../../../assets/images/middle-ai-image.png';
import AsteriskIcon from '../../../assets/icons/asterisk.svg';

const AlertInfo = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between border border-solid border-[#EFEBE7] rounded-xl pl-6 py-6 md:pl-10 text-white'>
      <div className='flex-1 md:pr-6'>
        <h2 className='text-lg md:text-xl xl:text-[1.75rem] xl:leading-10 font-black mb-4 xl:mb-9'>
          Nuestra AI analiza múltiples factores del mercado para proporcionar
          alertas en tiempo real, ayudándote a{' '}
          <span className='text-[var(--yellow1)]'>
            aumentar la rentabilidad en tus operaciones.
          </span>
        </h2>
        <div className='flex items-center justify-center'>
          <img src={AsteriskIcon} alt='Asterisk' className='w-24 mr-3' />
          <p className='text-sm md:text-lg 2xl:text-xl text-[var(--yellow1)]'>
            <span className='font-semibold'>Importante:</span> Este sistema
            proporciona alertas como herramientas de apoyo, no opera
            automáticamente ni maneja tu capital. Tú siempre mantienes el
            control total sobre tus decisiones de trading.
          </p>
        </div>
      </div>

      <div className='hidden md:block flex-shrink-0 mt-6 md:mt-0 md:ml-6'>
        <img
          src={MiddleAIImage}
          alt='Market Visualization'
          className='w-full '
        />
      </div>
    </div>
  );
};

export default AlertInfo;
