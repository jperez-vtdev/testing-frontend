import { useMemo } from 'react';

const useBarWidths = (coins, type) => {
  return useMemo(() => {
    if (!coins || coins.length === 0) return [];

    const processedCoins = coins
      .map((coin) => ({
        ...coin,
        percentChange: coin.quote?.USD?.percent_change_24h ?? 0,
      }))
      .filter((coin) => coin.percentChange !== null);

    if (processedCoins.length === 0) return [];

    processedCoins[0].barWidth = 100;

    for (let i = 1; i < processedCoins.length; i++) {
      const barWidth =
        type == 'bull'
          ? (processedCoins[i].percentChange / 100) * 100 * 100
          : 100 - (processedCoins[i].percentChange / 100) * 100 * 100;
      processedCoins[i].barWidth = barWidth;
    }

    return processedCoins;
  }, [coins, type]);
};

export default useBarWidths;
