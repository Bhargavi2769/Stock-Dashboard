import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StockBarChart = ({ data }) => {
  return (
    <div className='chart-container'>
      <h1 className='chart-heading'> Bar chart of open and close </h1>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" 
        tick={{
          stroke: '#6c757d',
          strokeWidth: 1,
          fontSize: 15,
          fontFamily: 'Roboto',
        }}/>
        <YAxis 
        tick={{
          stroke: 'gray',
          strokeWidth: 0,
          fontSize: 15,
          fontFamily: 'Roboto',
        }}/>
        <Tooltip />
        <Legend  
        wrapperStyle={{
              padding: 30,
              textAlign: 'center',
              fontSize: 12,
              fontFamily: 'Roboto',
            }}/>
        <Bar dataKey="open" fill="#8884d8" />
        <Bar dataKey="close" fill="#82ca9d" />
        {'// <Bar dataKey="close" fill="#82ca9d" />'}
      </BarChart>
    </div>
  );
};

export default StockBarChart;
