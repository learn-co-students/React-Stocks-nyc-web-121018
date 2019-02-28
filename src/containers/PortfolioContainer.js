import React, { Component } from 'react';
import Stock from '../components/Stock';

class PortfolioContainer extends Component {
  renderStocks = () => {
    console.log(this.props.purchased);
    return this.props.purchased.map(s => {
      return (
        <Stock
          key={s.id}
          id={s.id}
          name={s.name}
          price={s.price}
          buyStock={this.props.buyStock}
          sellStock={this.props.sellStock}
          stocks={this.props.stocks}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderStocks()}
      </div>
    );
  }
}

export default PortfolioContainer;
