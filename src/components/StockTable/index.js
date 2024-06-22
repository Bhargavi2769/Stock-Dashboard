import React from 'react';
import './index.css'


const StockTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.date}>
            <td>{item.date}</td>
            <td>{item.open}</td>
            <td>{item.high}</td>
            <td>{item.low}</td>
            <td>{item.close}</td>
            <td>{item.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
