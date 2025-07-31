import axios from 'axios';

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY; 
const BASE_URL = 'https://www.alphavantage.co/query';

export async function getStockQuote(symbol: string) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol,
        apikey: API_KEY,
      },
    });

    const data = response.data['Global Quote'];

    if (!data || !data['05. price']) {
      throw new Error('Geçerli veri alınamadı.');
    }

    return {
      symbol: data['01. symbol'],
      price: parseFloat(data['05. price']),
      currency: 'USD', // Alpha Vantage döndürmüyor ama genelde USD
      date: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Alpha Vantage API hatası:', error);
    throw error;
  }
}
