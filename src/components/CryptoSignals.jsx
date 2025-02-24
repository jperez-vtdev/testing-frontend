import React from 'react';
import { motion } from 'framer-motion';
import ErrorBoundary from '../../../../components/ErrorBoundary';
import HeaderBar from './HeaderBar';

const CryptoSignal = ({
  title = '',
  headerBgColor = 'bg-[#056000]',
  type,
  coins,
  menuItems = [],
}) => {
  const getRandomColor = (index) => {
    const short_colors = [
      'bg-[#C50202]',
      'bg-[#F55920]',
      'bg-[#E5A000]',
      'bg-[#9799A5]',
      'bg-yellow-500',
      'bg-blue-500',
      'bg-red-500',
      'bg-green-500',
      'bg-purple-500',
    ];
    const long_colors = [
      'bg-[#46C502]',
      'bg-[#E5A000]',
      'bg-[#FFD044]',
      'bg-yellow-500',
      'bg-blue-500',
      'bg-red-500',
      'bg-green-500',
      'bg-purple-500',
    ];
    const colors = type === 'long' ? long_colors : short_colors;
    if (index < 3) return colors[index];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <ErrorBoundary>
      <div className='flex flex-col items-center'>
        <HeaderBar title={title} bgColor={headerBgColor} items={menuItems} />
        <div className='relative w-full h-64 bg-[#474747] rounded-2xl overflow-hidden p-4'>
          {coins?.map((coin, index) => (
            <motion.div
              key={coin.id}
              className={`absolute ${getRandomColor(index)} text-white font-bold rounded-lg p-2`}
              style={{
                fontSize:
                  index === 0
                    ? '4rem'
                    : index === 1
                      ? '2rem'
                      : index === 2
                        ? '1.5rem'
                        : `${Math.random() * 2 + 1}rem`,
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                zIndex: 20 - index,
                opacity: 1 - index * 0.1,
              }}
              animate={{
                x: [0, Math.random() * 50 - 15],
                y: [0, Math.random() * 50 - 15],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            >
              {coin.symbol}
            </motion.div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CryptoSignal;
