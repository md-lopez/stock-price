import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import StockPriceDisplay from './components/StockPriceDisplay';

function App() {
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockPrice, setStockPrice] = useState(null);
  const [error, setError] = useState('');

  const fetchStockPrice = async (symbol) => {
    try {
      const response = await axios.get(`https://finnhub.io/api/v1/quote`, {
        params: {
          symbol: symbol,
          token: process.env.REACT_APP_FINNHUB_API_KEY,
        },
      });

      const data = response.data;

      // Check if data is valid
      if (!data || !data.c) {
        throw new Error('Invalid stock symbol');
      }

      const price = data.c; // `c` represents the current price in Finnhub's response
      setStockPrice(price);
      setError('');
    } catch (err) {
      setError('Invalid stock symbol or network error. Please try again.');
      setStockPrice(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Stock Price Checker</h1>
      <SearchBar 
        stockSymbol={stockSymbol}
        setStockSymbol={setStockSymbol}
        fetchStockPrice={fetchStockPrice}
      />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {stockPrice && <StockPriceDisplay stockPrice={stockPrice} />}
    </div>
  );
}

export default App;
