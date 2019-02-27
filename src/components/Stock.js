import React from 'react'

const Stock = (props) => {
  let handleClick = () => {
    if (props.portfolio === false) {
      props.purchaseStock(props.theStock.id)
    }else{
      props.sellStock(props.theStock.id)
    }
  }

  return(
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{props.theStock.name}</h5>
          <p className="card-text">{props.theStock.ticker}: {props.theStock.price}</p>
        </div>
      </div>
    </div>
  )
};

//ticker: stock price

export default Stock
