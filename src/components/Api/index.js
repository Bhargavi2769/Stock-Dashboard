import axios from 'axios';

const API_KEY = 'R8Q93SHV4KWRZQFY'; 
const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo`;

export const fetchStockData = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data && response.data["Time Series (Daily)"]) {
      const data = response.data["Time Series (Daily)"];
      console.log(data)
      const formattedData = Object.keys(data).map(date => ({
        date,
        open: parseFloat(data[date]["1. open"]),
        high: parseFloat(data[date]["2. high"]),
        low: parseFloat(data[date]["3. low"]),
        close: parseFloat(data[date]["4. close"]),
        volume: parseInt(data[date]["5. volume"]),
      }));
      return formattedData;
    } else {
      console.error('Invalid response data:', response.data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return [];
  }
};
