import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      allStocks: [],
      listOfStocks: [],
      sortedStocks: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(d => {
      d.map(stock => stock.purchased = false)
      d.map(stock => stock.sold = false)
      this.setState({
        allStocks: d,
        listOfStocks: d,
        sortedStocks: d,
      })
    })
  }

  purchaseStock = (stockId) => {
    let newStocks = this.state.allStocks.map(stock =>{
      if (stock.id === stockId) {
        stock.purchased = true
        return stock
      }else{
        return stock
      }
    })

    let newlistOfStocks = newStocks.filter(stock => stock.purchased === false)
    this.setState({
      allStocks: newStocks,
      listOfStocks: newlistOfStocks,
      sortedStocks: newlistOfStocks,
    })
  }

  sellStock = (stockId) => {
    let newStocks = this.state.allStocks.map(stock =>{
      if (stock.id === stockId) {
        stock.sold = true
        return stock
      }else{
        return stock
      }
    })
    this.setState({allStocks: newStocks})
  }

  sortStocks = (type) => {
    if (type === 'alpha') {
      let newSortedStocks = this.state.sortedStocks.sort((objectA,objectB) => {
        let nameA = objectA.ticker
        let nameB = objectB.ticker
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      })
      this.setState({sortedStocks: newSortedStocks})
    }
    if (type === 'price') {
      let newSortedStocks = this.state.sortedStocks.sort((objectA,objectB) => {
        let priceA = parseFloat(objectA.price)
        let priceB = parseFloat(objectB.price)
        return (priceA > priceB) ? -1 : (priceA < priceB) ? 1 : 0;
      })
      this.setState({sortedStocks: newSortedStocks})
    }
  }

  filterStocks = (type) => {
    if (type !== 'All') {
      let newFilteredStocks = this.state.listOfStocks.filter(stock => stock.type === type)
      this.setState({sortedStocks: newFilteredStocks})
    }else {
      this.setState({sortedStocks: this.state.listOfStocks})
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          sortStocks={this.sortStocks}
          filterStocks={this.filterStocks}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                sortedStocks={this.state.sortedStocks}
                purchaseStock={this.purchaseStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                allStocks={this.state.allStocks}
                sellStock={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
