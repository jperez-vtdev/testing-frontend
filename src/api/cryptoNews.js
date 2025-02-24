const API_KEY = '04398a29102699a84e3ae433317302c175b08bf6';
const URL = `https://cryptopanic.com/api/v1/posts/?auth_token=${API_KEY}&public=true`;

export const fetchCryptoPanicNews = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error al obtener noticias:', error);
    return [];
  }
};
