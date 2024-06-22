import React, { useState, useEffect } from 'react';
import Header from '../Header';
import StockChart from '../StockChart';
import StockTable from '../StockTable';
import StockBarChart from '../StockBarChart';

import { fetchStockData } from '../Api';

const StockDashboard = () => {
    const [stockData, setStockData] = useState([]);
    const [filter, setFilter] = useState('all');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    useEffect(() => {
      const getData = async () => {
        const data = await fetchStockData();
        setStockData(data);
      };
  
      getData();
    }, []);
  
     const handleFilterChange = (event) => {
      setFilter(event.target.value);
     };
  
    const handleStartDateChange = (event) => {
      setStartDate(event.target.value);
    };
  
    const handleEndDateChange = (event) => {
      setEndDate(event.target.value);
    };
  
    const filteredData = stockData.filter((item) => {
      const itemDate = new Date(item.date);
      const isWithinDateRange = (!startDate || itemDate >= new Date(startDate)) &&
                                (!endDate || itemDate <= new Date(endDate));
      if (filter === 'all') return isWithinDateRange;
      if (filter === 'high') return item.volume > 3000000 && isWithinDateRange;
      if (filter === 'low') return item.volume < 3000000 && isWithinDateRange;
      return true;
    });
  
    return (
      <div className="dashboard">
        <Header />
        <div className="filters">  
          <label className='filters-label'>
            Filter by price:
            <select value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="high">High Price</option>
              <option value="low">Low Price</option>
            </select>
          </label>
          <label className='filters-label'>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
          <label className='filters-label'>
            End Date:             
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
        <div className="charts">
          <StockChart data={filteredData} />
          <StockBarChart data={filteredData} />
        </div>
        <div className="table">
          <StockTable data={filteredData} />
        </div>
          </div>

    );
  };
  
export default StockDashboard;


