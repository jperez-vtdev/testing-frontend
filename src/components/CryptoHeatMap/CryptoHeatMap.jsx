// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "dataSource": "Crypto",
          "blockSize": "market_cap_calc",
          "blockColor": "change",
          "locale": "es",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": true,
          "isDataSetEnabled": true,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
          "width": "100%",
          "height": "100%"
        }`;

    if (container.current.children.length < 2) {
      container.current.appendChild(script);
    }
    // valida si container tiene un hijo iframe para que solo renderice una vez
  }, []);

  return (
    <div className='w-full h-[500px]'>
      <div className='tradingview-widget-container' ref={container}>
        <div className='tradingview-widget-container__widget'></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
