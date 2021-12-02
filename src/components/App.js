import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(response => response.json())
    .then(stockData => setStocks(stockData))
  },[])

  const [stocks, setStocks] = useState([])


  return (
    <div>
      <Header />
      <MainContainer stockData={stocks} />
    </div>
  );
}

export default App;