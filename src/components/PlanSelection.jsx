import React from 'react';
import DiamondIcon from '../assets/icons/diamond.svg';
import ManWithGoldCardImage from '../assets/images/man-gold-card.png'
import LineWithDot from './LineWithDot/LineWithDot';

const PlanSelection = () => {
  const PlansDesktop = () => (
    <div className='flex flex-col xl:flex-row items-end justify-between gap-6 3xl:gap-0'>
      <img
        src={ManWithGoldCardImage}
        alt='man with gold card image'
        className='w-[550px] 3xl:w-[550px] mb-0'
      />

      <div className='flex flex-row items-end justify-between gap-6 pb-6 xl:mr-8 3xl:mr-12'>
        <div className='h-auto w-[15.625rem] sm:w-[20rem] 2xl:w-[24.75rem] 3xl:w-[28.75rem] bg-gradient-to-bl from-[#8A8A8A] via-[#ADADAD] to-[#474747] text-white p-4 rounded-xl shadow-md flex-1'>
          <h3 className='text-5xl leading-[3.5rem] font-bold mb-5'>Inicio</h3>
          <div className='flex flex-row mb-2 justify-between items-end'>
            <p className='text-6xl xl:text-8xl 3xl:text-9xl font-bold'>$0</p>
            <span className='text-4xl font-bold'>USD</span>
          </div>
          <p className='font-semibold text-2xl xl:text-3xl mt-5 mb-2'>
            Incluye:
          </p>
          <ul className='text-base mb-4'>
            <li className='mb-2'>Recursos gratis</li>
            <li className='mb-2'>Acceso a CXP blog</li>
            <li className='mb-2 line-through text-[#EFEBE740]'>
              Acceso a Discord
            </li>
            <li className='mb-2 line-through text-[#EFEBE740]'>
              Acceso a CXP APP
            </li>
            <li className='mb-2 line-through text-[#EFEBE740]'>
              Consulta directa con Crypto expertos
            </li>
          </ul>
          <button className='bg-none border border-solid border-[#EFEBE7] text-white py-2 px-4 rounded-md w-full hover:bg-[#402C00] font-medium text-2xl'>
            Adquirir Ahora
          </button>
        </div>
        <div className='h-auto w-[15.625rem] sm:w-[20rem] 2xl:w-[24.75rem] 3xl:w-[28.75rem] bg-gradient-to-bl from-[#B9953D] via-[#DBBF7C] to-[#CE9E28] text-[#5B5B5C] p-4 rounded-xl shadow-md flex-1'>
          <h3 className='text-5xl leading-[3.5rem] font-bold mb-5 lg:mb-20'>
            Premium
          </h3>
          <div className='flex flex-row mb-2 justify-between items-end'>
            <p className='text-6xl xl:text-8xl 3xl:text-9xl font-bold'>$50</p>
            <span className='text-4xl font-bold'>USD</span>
          </div>
          <p className='font-semibold mt-5 mb-2'>Incluye:</p>
          <ul className='text-base mb-4'>
            <li className='mb-2'>Recursos gratis</li>
            <li className='mb-2'>Dashboard Intraday</li>
            <li className='mb-2'>Acceso a Discord</li>
            <li className='mb-2'>Dashboard daily</li>
            <li className='mb-2'>Consulta directa con Crypto expertos</li>
          </ul>
          <button className='bg-none border border-solid border-[#EFEBE7] text-white py-2 px-4 rounded-md w-full hover:bg-[#402C00] font-medium text-2xl'>
            Adquirir Ahora
          </button>
        </div>
      </div>
    </div>
  );

  const PlansMobile = () => (
    <div className='flex flex-col items-end justify-between gap-6 3xl:gap-0'>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:items-end gap-6 w-full pb-6 m-auto'>
        <div className='h-auto w-[15.625rem] sm:w-[20rem] bg-gradient-to-bl from-[#8A8A8A] via-[#ADADAD] to-[#474747] text-white p-4 rounded-xl shadow-md flex-1'>
          <h3 className='text-5xl leading-[3.5rem] font-bold mb-5'>Inicio</h3>
          <div className='flex flex-row mb-2 justify-between items-end'>
            <p className='text-6xl xl:text-9xl font-bold'>$0</p>
            <span className='text-4xl font-bold'>USD</span>
          </div>
          <p className='font-semibold text-2xl xl:text-3xl mt-5 mb-2'>
            Incluye:
          </p>
          <ul className='text-base mb-4'>
            <li className='mb-2'>Recursos gratis</li>
            <li className='mb-2'>Acceso a CXP blog</li>
            <li className='mb-2 line-through text-[#EFEBE740]'>
              Acceso a Discord
            </li>
            <li className='mb-2 line-through text-[#EFEBE740]'>
              Acceso a CXP APP
            </li>
            <li className='mb-2 line-through text-[#EFEBE740]'>
              Consulta directa con Crypto expertos
            </li>
          </ul>
          <button className='bg-none border border-solid border-[#EFEBE7] text-white py-2 px-4 rounded-md w-full hover:bg-[#402C00] font-medium text-2xl'>
            Adquirir Ahora
          </button>
        </div>
        <div className='h-auto w-[15.625rem] sm:w-[20rem] bg-gradient-to-bl from-[#B9953D] via-[#DBBF7C] to-[#CE9E28] text-[#5B5B5C] p-4 rounded-xl shadow-md flex-1'>
          <h3 className='text-5xl leading-[3.5rem] font-bold mb-5 lg:mb-16'>
            Premium
          </h3>
          <div className='flex flex-row mb-2 justify-between items-end'>
            <p className='text-6xl font-bold'>$50</p>
            <span className='text-4xl font-bold'>USD</span>
          </div>
          <p className='font-semibold mt-5 mb-2'>Incluye:</p>
          <ul className='text-base mb-4'>
            <li className='mb-2'>Recursos gratis</li>
            <li className='mb-2'>Dashboard Intraday</li>
            <li className='mb-2'>Acceso a Discord</li>
            <li className='mb-2'>Dashboard daily</li>
            <li className='mb-2'>Consulta directa con Crypto expertos</li>
          </ul>
          <button className='bg-none border border-solid border-[#EFEBE7] text-white py-2 px-4 rounded-md w-full hover:bg-[#402C00] font-medium text-2xl'>
            Adquirir Ahora
          </button>
        </div>
      </div>
      <img
        src={ManWithGoldCardImage}
        alt='man with gold card image'
        className='w-5/6 m-auto'
      />
    </div>
  );

  return (
    <div className='flex flex-col items-center justify-between border border-solid border-[#EFEBE7] rounded-xl pl-0 pt-6 text-white'>
      <div className=' text-left mb-14 pl-0 md:pl-10'>
        <div className='flex flex-row gap-2 justify-start items-center mb-7 xl:mb-10'>
          <img src={DiamondIcon} alt='Diamond' className='w-24 h-24 mr-3' />
          <h2 className='text-lg md:text-2xl xl:text-5xl xl:leading[3.5rem] font-black'>
            Escoge el mejor plan{' '}
            <span className='text-[#EABC4D]'>para ti y tus metas</span>
          </h2>
          <LineWithDot />
        </div>
        <p className='text-lg xl:text-3xl text-white pl-2 md:pl-0'>
          CXP nace con la misión de democratizar el conocimiento sobre el
          trading de criptomonedas. Fusionamos tecnología avanzada y educación
          práctica para empoderar a traders de todos los niveles.
        </p>
      </div>

      <div className='hidden xl:block'>
        <PlansDesktop />
      </div>
      <div className='block xl:hidden'>
        <PlansMobile />
      </div>
    </div>
  );
};

export default PlanSelection;
