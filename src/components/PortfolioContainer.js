import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stockData, setStockPortfolio }) {

  function handleSell(clickedStock) {
    setStockPortfolio((portfolio) => [...portfolio].filter((stock) => clickedStock != stock))
  }
  
  const purchasedStocks = stockData.map((stock) => (
    <Stock 
      key={stock.id}
      name={stock.name}
      ticker={stock.ticker}
      price={stock.price}
      type={stock.type}
      onClick={() => handleSell(stock)}
      />
  ))
    
  return (
    <div>
      <h2>My Portfolio</h2>
       {purchasedStocks}
    </div>
  );
}

export default PortfolioContainer;
