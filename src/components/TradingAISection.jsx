import React from 'react';
import AIIcon from '../../../assets/icons/ai.svg';
import AIImage from '../../../assets/images/ai-image.png';

const TradingAISection = () => {
  return (
    <div className='flex flex-col gap-4 sm:gap-8 xl:gap-16 mb-4 md:mb-8'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-start items-center w-full gap-4'>
          <img src={AIIcon} alt='Image AI' />
          <p className='text-[#EFEBE7] font-black text-xl sm:text-2xl lg:text-3xl xl:text-6xl'>
            Potencia tu <span className='text-[#EABC4D]'>trading con IA</span>
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex-1'>
          <p className='text-[#EFEBE7] font-normal text-xl sm:text-2xl lg:text-3xl lg:leading-10 xl:text-5xl xl:leading-[56px]'>
            Nuestro equipo ha transformado más de 10 años de experiencia en una
            rápida y sencilla curva de aprendizaje, estamos definitivamente en
            el mejor momento para el mercado Crypto y en CXP te traemos todo lo
            necesario para que tú también puedas ser parte de esto.
          </p>
        </div>
        <div className='flex-1 md:relative m-auto md:m-0'>
          <img
            className='w-80 md:absolute md:-top-20 lg:w-96 lg:-top-24 xl:w-full xl:-top-24'
            src={AIImage}
            alt='complete Image AI'
          />
        </div>
      </div>
    </div>
  );
};

export default TradingAISection;
