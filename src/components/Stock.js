import React from 'react';

const Stock = props => {
  const purchasedCheck = stockID => {
    let found = props.stocks.find(s => s.id == stockID);
    if (props.stocks.includes(found)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <h5
            className='card-title'
            onClick={
              purchasedCheck(props.id) ? props.buyStock : props.sellStock
            }
            id={props.id}
          >
            {props.name}
          </h5>
          <p className='card-text'>{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
