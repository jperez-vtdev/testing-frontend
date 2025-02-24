import React, { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import HeaderBar from './HeaderBar';
import Triangle from '../../../../components/Triangle/Triangle';
import useBarWidths from '../../../../hooks/useBarWidth';

const AlertList = ({
  coins,
  type = 'bull',
  title = 'Bull Alert',
  headerBgColor = 'bg-[#056000]',
  graphBgColor = 'linear-gradient(90deg, #46C502 0%, #225F01 95.18%)',
  menuItems = [],
}) => {
  const textColor = type !== 'bull' ? '#C50202' : '#54EA41';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (coins?.length > 0) {
      setLoading(false);
    }
  }, [coins]);

  const coinsList = useBarWidths(coins, type);

  return (
    <div className="min-h-auto flex flex-col items-center">
      <HeaderBar title={title} bgColor={headerBgColor} items={menuItems} />
      {loading ? (
        <div className="text-white text-center mt-20">Loading...</div>
      ) : (
        <div className="w-full bg-[#474747] p-2 rounded-lg max-w-lg space-y-4">
          <AnimatePresence>
            {coinsList?.map((coin) => {
              const percent_change = coin.quote.USD.percent_change_24h;
              const percent_change_fixed = percent_change.toFixed(2);
              const barWidth = coin.barWidth;
              return (
                <motion.div
                  key={coin.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="h-[60px] flex items-center rounded-md overflow-hidden"
                >
                  <div
                    className="h-full flex items-center justify-between text-white font-bold px-2"
                    style={{
                      background: graphBgColor,
                      width: `${barWidth}%`,
                      transition: 'width 0.5s ease',
                    }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <p className="text-white font-bold text-lg">
                        {percent_change_fixed}%
                      </p>
                      <p className="text-white font-bold text-lg">
                        ${coin.quote.USD.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="h-full flex items-center justify-between text-white w-full">
                    <div className="h-full px-2 flex items-center space-x-2 bg-[#2C2D31] rounded-r-lg">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <img
                          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                          alt={coin.name}
                          className="w-10 h-10 rounded-lg"
                        />
                      </div>
                      <div className="text-right">
                        <h2 className="text-white font-bold text-2xl">
                          {coin.symbol.length > 7
                            ? coin.symbol.slice(0, 7) + '...'
                            : coin.symbol}
                        </h2>
                        <p
                          className={`text-xs font-bold rounded-md`}
                          style={{ color: textColor }}
                        >
                          {percent_change_fixed}%
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-white font-bold text-base">
                          {coin.cmc_rank}
                        </p>
                        <Triangle type={type === 'bull' ? 'up' : 'down'} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default AlertList;
