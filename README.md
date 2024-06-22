Stock Dashboard

This project is a stock dashboard application built with React. It fetches stock data from the Alpha Vantage API and displays it using various charts and tables. Users can filter the data by price and date range.

Features

Header Section: Includes a title and a brief description of the dashboard’s purpose.

Data Visualization: Implements both a line chart and a bar chart using recharts to display stock prices.

Interactive Elements: Provides dropdowns and date pickers to filter the data by price and date range.

Responsive Design: Ensures the dashboard works well on both desktop and mobile devices.

Styling and UX: Uses CSS for styling, focusing on a visually appealing and user-friendly interface.

Getting Started

* Prerequisites

Node.js and npm installed on your machine.

Installation
1. Clone the repository:

bash

Copy code
git clone https://github.com/Bhargavi2769/Stock-Dashboard.git
cd stock-dashboard
2. Install the dependencies:

bash
Copy code
npm install

3. Obtain an API key from Alpha Vantage and replace YOUR_API_KEY in the fetchStockData function with your actual API key.

Running the Application
Start the development server:

bash
Copy code
npm start
The application will open in your default browser at http://localhost:3000.

Project Structure
css
Copy code
stock-dashboard/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
|   |   |__ Api/index.js
│   │   ├── Header
|   |   |   |__index.js
|   |   |   |__index.css
│   │   |── StockBarChart
|   |   |   |__index.js
|   |   |   |__index.css
|   |   ├── StockChart
|   |   |   |__index.js
|   |   |   |__index.css
│   │   ├── StockDashboard
|   |   |   |__index.js
|   |   |   |__index.css
│   │   ├── StockTable
|   |       |__index.js
|   |       |__index.css
│   ├
│   │
│   ├── App.js
│   ├── index.js
│   
│
├── .gitignore
├── package.json
└── README.md
* Components

1. Header: Displays the title and description of the dashboard.

2. StockDashboard: Main component that fetches data and manages state. It includes filters and renders the charts and table.

3. StockChart: Renders a line chart of the stock data.

4. StockBarChart: Renders a bar chart of the stock data.

5. StockTable: Renders a table of the stock data.

6. Filtering Data
The dashboard allows users to filter stock data based on:

Price: All (withinDateRange), High Price (volume greater than  > 3000000 and withinDateRange), and Low Price (volume less than  > 3000000 and withinDateRange).
Date Range: Users can select a start and end date to filter the data within that range.
Dependencies
React: Library for building the user interface.
Axios: Library for making HTTP requests.
Recharts: Library for rendering charts.
Alpha Vantage API: Source of stock data.
License
This project is licensed under the MIT License.

Acknowledgements
Alpha Vantage for providing the stock data API.
Recharts for the charting library.
