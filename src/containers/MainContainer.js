import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
  state = {
    stocks: [],
    purchased: [],
    sortSelection: '',
    filterSelection: ''
  };

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(r => r.json())
      .then(stocks => {
        this.setState({
          stocks: stocks
        });
      });
  }

  buyStock = e => {
    let boughtStock = this.state.stocks.find(
      s => s.id === parseInt(e.target.id)
    );
    let remainingStocks = [...this.state.stocks];
    remainingStocks.splice(this.state.stocks.indexOf(boughtStock), 1);
    this.setState({
      purchased: [...this.state.purchased, boughtStock],
      stocks: remainingStocks
    });
  };

  sellStock = e => {
    let soldStock = this.state.purchased.find(
      s => s.id === parseInt(e.target.id)
    );
    let remainingPurchasedStocks = [...this.state.purchased];
    remainingPurchasedStocks.splice(this.state.purchased.indexOf(soldStock), 1);
    this.setState({
      stocks: [...this.state.stocks, soldStock],
      purchased: remainingPurchasedStocks
    });
  };

  alphaSort = () => {
    return [...this.state.stocks].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  };

  priceSort = () => {
    return [...this.state.stocks].sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
  };

  handleSort = e => {
    console.log(e.target.value);
    // let alphaSorted = [...this.state.stocks].sort();
    this.setState({
      sortSelection: e.target.value,
      stocks:
        e.target.value === 'Alphabetically'
          ? this.alphaSort()
          : this.priceSort()
    });
  };

  handleFilter = e => {
    this.setState({
      filterSelection: e.target.value,
      filteredStocks: [...this.state.stocks].filter(
        s => s.type.toUpperCase() === e.target.value.toUpperCase()
      )
    });
  };

  render() {
    console.log('main', this.state);
    return (
      <div>
        <SearchBar
          handleSort={this.handleSort}
          sortSelection={this.state.sortSelection}
          handleFilter={this.handleFilter}
          filterSelection={this.state.filterSelection}
        />

        <div className='row'>
          <div className='col-8'>
            <StockContainer
              stocks={
                this.state.filterSelection
                  ? this.state.filteredStocks
                  : this.state.stocks
              }
              buyStock={this.buyStock}
            />
          </div>
          <div className='col-4'>
            <PortfolioContainer
              purchased={this.state.purchased}
              stocks={this.state.stocks}
              sellStock={this.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
