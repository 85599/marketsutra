import React from 'react';

const StockTable = ({ stocks }) => {
    return (
        <div>
            <h2>Stock Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock, index) => (
                        <tr key={index}>
                            <td>{stock.symbol}</td>
                            <td>{stock.name}</td>
                            <td>${stock.price.toFixed(2)}</td>
                            <td>{stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%</td>
                            <td>{stock.volume.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;