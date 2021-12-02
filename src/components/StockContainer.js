import React from "react";
import Stock from "./Stock";

function StockContainer({stockData, setStockPortfolio}) {

  function handleClick(stock) {
    setStockPortfolio((portfolio) => [...portfolio, stock]);
  }
  
  const stocks = stockData.map((stock) => (
    <Stock 
      key={stock.id}
      name={stock.name}
      ticker={stock.ticker}
      price={stock.price}
      type={stock.type}
      onClick={() => handleClick(stock)}
      />
  ))
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocks}
    </div>
  );
}

export default StockContainer;
