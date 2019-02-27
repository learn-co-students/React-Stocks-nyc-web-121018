import React, { Component } from 'react';
import Stock from '../components/Stock'

const StockContainer = (props) => {

  let renderStocks = () => {
    return props.sortedStocks.map(stock => {
      return(
        <Stock
          theStock={stock}
          key={stock.id}
          purchaseStock={props.purchaseStock}
          portfolio={false}
        />
      )
    })
  }

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks()}
    </div>
  )
}

export default StockContainer;
