import React, { Component } from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = (props) => {

  let renderStocks = () => {
    return props.allStocks.map(stock => {
      if (stock.purchased === true && stock.sold === false) {
        return(
          <Stock
            theStock={stock}
            key={stock.id}
            sellStock={props.sellStock}
            portfolio={true}
          />
        )
      }else{
        return null;
      }
    })
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderStocks()}
    </div>
  );
}

export default PortfolioContainer;
