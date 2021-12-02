import React from "react";

function Stock({ticker, name, price, type, onClick}) {

  return (
    <div>
      <div className="card" onClick={onClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
          <p className="card-text">{type}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
