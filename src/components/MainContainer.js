import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stockData }) {
  const [typeFilter, setTypeFilter] = useState("Tech")
  const [checkedSort, setCheckedSort] = useState("name")
  const [myStockPortfolio, setStockPortfolio] = useState([])

  const stockDisplay = stockData.filter((stock) => {
      return stock.type === typeFilter
    }).sort((stockA, stockB) => {
      if (checkedSort === "price") {
        if (stockB.price < stockA.price) {
          return 1;
        } else if (stockB.price > stockA.price) {
          return -1;
        } else {
          return 0;
        }
      } else if (checkedSort === "name") {
        if (stockB.name < stockA.name) {
          return 1;
        } else if (stockB.name > stockA.name) {
          return -1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }).filter((stock) => {
      if (myStockPortfolio.includes(stock)) {
        return false;
      } else {
        return true;
      }
    });

    const filterPortfolio = myStockPortfolio.filter((stock) => {
      return stock.type === typeFilter
    }).sort((stockA, stockB) => {
      if (checkedSort === "price") {
        if (stockB.price < stockA.price) {
          return 1;
        } else if (stockB.price > stockA.price) {
          return -1;
        } else {
          return 0;
        }
      } else if (checkedSort === "name") {
        if (stockB.name < stockA.name) {
          return 1;
        } else if (stockB.name > stockA.name) {
          return -1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    });
  
  return (
    <div>
      <SearchBar 
      checkedSort={checkedSort} 
      setCheckedSort={setCheckedSort}
      setTypeFilter={setTypeFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={stockDisplay} setStockPortfolio={setStockPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer stockData={filterPortfolio} setStockPortfolio={setStockPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

