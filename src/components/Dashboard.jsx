import CryptoSignal from './CryptoSignals';
import AlertList from './AlertList';
import NewsSection from './NewsSection/NewsSection';
import { useEffect, useState } from 'react';
import HeatMap from './HeatMap';
import TradingAISection from './TradingAISection';
import AlertInfo from './AlertInfo';
import PlanSelection from './PlanSelection';
import FormSection from './FormSection';
import DashboardHeader from './DashboardHeader';
import { getCMCCoins } from '../api/cointMarketCap';

const FreeDashboard = () => {
  const [currentTop20, setCurrentTop20] = useState([]);
  const [currentWorst20, setCurrentWorst20] = useState([]);
  const [prevTop20, setPrevTop20] = useState([]);
  const [prevWorst20, setPrevWorst20] = useState([]);
  const menuItems = [
    {
      label: 'Option 1',
      onClick: () => alert('You clicked Option 1!'),
    },
    {
      label: 'Option 2',
      onClick: () => alert('You clicked Option 2!'),
    },
    {
      label: 'Option 3',
      onClick: () => alert('You clicked Option 3!'),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCMCCoins();

        let sortedCoins = response.data.data.sort(
          (a, b) =>
            b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h,
        );

        const top20 = sortedCoins.slice(0, 20);
        const worst20 = sortedCoins
          .slice(sortedCoins.length - 20, sortedCoins.length)
          .reverse();

        let changedTopCoins = [];
        let changedWorstCoins = [];

        top20.forEach((coin, index) => {
          if (prevTop20[index] && prevTop20[index].id !== coin.id) {
            changedTopCoins.push(coin);
          }
        });

        worst20.forEach((coin, index) => {
          if (prevWorst20[index] && prevWorst20[index].id !== coin.id) {
            changedWorstCoins.push(coin);
          }
        });

        if (prevTop20?.length === 0 || changedTopCoins.length > 0) {
          setPrevTop20(top20);
          setCurrentTop20(top20);
          changedTopCoins.forEach((coin) => speakAlert(coin.symbol, 'bull'));
        }

        if (prevWorst20?.length === 0 || changedWorstCoins.length > 0) {
          setPrevWorst20(worst20);
          setCurrentWorst20(worst20);
          changedWorstCoins.forEach((coin) => speakAlert(coin.symbol, 'short'));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [prevTop20, prevWorst20]);

  const speakAlert = (name, type) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = `${name}`;

    const speak = () => {
      let voices = speechSynthesis.getVoices();
      const voiceFound = voices.find((voice) => {
        const actualVoice = voice.name.toLowerCase();
        const maleVoices =
          actualVoice.includes('microsoft pablo') ||
          actualVoice.includes('male');
        const femaleVoices =
          actualVoice.includes('microsoft laura') ||
          actualVoice.includes('female');
        return type === 'bull' ? femaleVoices : maleVoices;
      });
      msg.voice = voiceFound || voices[0];

      let repeatCount = 0;
      const interval = setInterval(() => {
        if (repeatCount < 3) {
          speechSynthesis.speak(msg);
          repeatCount++;
        } else {
          clearInterval(interval);
        }
      }, 2000);
    };

    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', speak);
    } else {
      speak();
    }
  };

  const AlertsDesktop = () => (
    <div className='grid grid-cols-1 lg:grid-cols-10 gap-[24px] mt-4'>
      <div className='lg:col-span-3'>
        <AlertList
          type='bull'
          coins={currentTop20.slice(0, 7)}
          menuItems={menuItems}
        />
      </div>
      <div className='lg:col-span-4'>
        <NewsSection />
      </div>
      <div className='lg:col-span-3'>
        <AlertList
          type='short'
          coins={currentWorst20.slice(0, 7)}
          headerBgColor='bg-[#7F0000]'
          title='Short Alert'
          graphBgColor='linear-gradient(90deg, #FF0000 0%, #600000 95.18%)'
          menuItems={menuItems}
        />
      </div>
    </div>
  );

  const AlertsMobile = () => (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px] mt-4'>
      <div className='col-span-1'>
        <AlertList
          type='bull'
          coins={currentTop20.slice(0, 7)}
          menuItems={menuItems}
        />
      </div>
      <div className='col-span-1'>
        <AlertList
          type='short'
          coins={currentWorst20.slice(0, 7)}
          headerBgColor='bg-[#7F0000]'
          title='Short Alert'
          graphBgColor='linear-gradient(90deg, #FF0000 0%, #600000 95.18%)'
          menuItems={menuItems}
        />
      </div>
      <div className='col-span-1 sm:col-span-2'>
        <NewsSection />
      </div>
    </div>
  );

  return (
    <div className='p-4 bg-basicDashboard min-h-auto text-white'>
      <div className='max-w-[1532px] mx-auto'>
        <DashboardHeader />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[20px] mt-4'>
          <CryptoSignal
            title='Long signal'
            type='long'
            coins={currentTop20}
            menuItems={menuItems}
          />
          <CryptoSignal
            title='Short signal'
            type='short'
            coins={currentWorst20}
            headerBgColor='bg-[#7F0000]'
            menuItems={menuItems}
          />
        </div>
        <div className='hidden lg:block'>
          <AlertsDesktop />
        </div>
        <div className='block lg:hidden'>
          <AlertsMobile />
        </div>
        <div className='block mt-4 lg:mt-8'>
          <HeatMap menuItems={menuItems} />
        </div>
        <div className='block mt-8 lg:mt-16'>
          <TradingAISection />
        </div>
        <div className='block mt-8 lg:mt-16'>
          <AlertInfo />
        </div>
        <div className='block mt-8 lg:mt-16 w-full'>
          <PlanSelection />
        </div>
        <div className='block mt-8 lg:mt-16'>
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default FreeDashboard;
