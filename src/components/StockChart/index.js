import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StockChart = ({ data }) => {
  return (
    <div className='chart-container'>
      <h1 className='chart-heading' >Line Chart Of Volume</h1>
      <LineChart width={600} height={300} data={data}
      margin={{ top: 25, right: 30, left: 40, bottom: 25 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="volume" stroke="#8884d8" activeDot={{ r: 2 }} />
        {'//<Line type="monotone" dataKey="open" stroke="#82ca9d" activeDot={{ r: 2 }} /> '}

      </LineChart>
    </div>
  );
};

export default StockChart;
