import React, { Component } from 'react';
import Stock from '../components/Stock';

class StockContainer extends Component {
  renderStocks = () => {
    return this.props.stocks.map(s => {
      return (
        <Stock
          key={s.id}
          id={s.id}
          name={s.name}
          price={s.price}
          buyStock={this.props.buyStock}
          stocks={this.props.stocks}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }
}

export default StockContainer;
