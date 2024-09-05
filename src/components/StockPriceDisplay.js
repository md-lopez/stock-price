import React from 'react';

function StockPriceDisplay({ stockPrice }) {
  return (
    <div className="mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700">Current Stock Price: <span className="text-green-600">${stockPrice}</span></h2>
    </div>
  );
}

export default StockPriceDisplay;
