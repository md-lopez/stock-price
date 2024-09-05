import React from 'react';

function SearchBar({ stockSymbol, setStockSymbol, fetchStockPrice }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (stockSymbol.trim() !== '') {
      fetchStockPrice(stockSymbol.trim().toUpperCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4">
      <input
        type="text"
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
        placeholder="Enter stock symbol (e.g., AAPL)"
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
