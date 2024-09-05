# Overview
The Stock Price Checker is a simple React application that allows users to search for and retrieve real-time stock prices by entering a stock symbol (e.g., AAPL, TSLA). The app fetches stock data from the Finnhub API and displays the current stock price. It also includes error handling to notify users when an invalid stock symbol is entered or when network issues occur.

# Features
- Stock Symbol Input: A search bar where users can input stock symbols to look up the current price.
Real-Time Stock Price Fetching:

- Retrieves real-time stock prices using the Finnhub API based on the symbol entered.
Error Handling:

- Displays an error message if the stock symbol is invalid or if there is a network error.
User Interface:

- Simple and clean interface styled with Tailwind CSS.
- Error messages and results are clearly displayed.

# Prerequisites
- Node.js and npm installed on your machine.
- A Finnhub API key (sign up at finnhub.io).

# Dependencies
- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client to fetch data from the Finnhub API.
- Tailwind CSS: Utility-first CSS framework for styling the UI.


# Installation and Setup

- Clone the repo:
git clone <your-repo-url>
cd stock-price-checker

- Install dependencies:
npm install

- Setup Environment Variables:
Create a .env file in the root of your project:
REACT_APP_FINNHUB_API_KEY=your_finnhub_api_key_here

- Run the application:
npm start