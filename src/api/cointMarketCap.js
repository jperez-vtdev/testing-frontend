import axios from 'axios';

const API_KEY = '635b4d8f-dc55-4eeb-83f6-98d2e195e904'; // TODO: CHANGE IT FOR PROD
const TEST_API_KEY = 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c';
const CMC_URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
const HEADERS = {
  'X-CMC_PRO_API_KEY':
  API_KEY,
  Accept: 'application/json',
};

export const getCMCCoins = async () => {
  try {
    const response = await axios.get(CMC_URL, {
      headers: HEADERS,
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
