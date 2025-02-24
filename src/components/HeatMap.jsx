
import CryptoHeatMap from './CryptoHeatMap/CryptoHeatMap';
import HeaderBar from './HeaderBar';

const HeatMap = ({ menuItems }) => {
  const title = 'News momentum';
  const headerBgColor = 'bg-[#C38A00]';
  return (
    <div className='flex flex-col items-center justify-center'>
      <HeaderBar title={title} bgColor={headerBgColor} items={menuItems} />
      <CryptoHeatMap />
    </div>
  );
};

export default HeatMap;
