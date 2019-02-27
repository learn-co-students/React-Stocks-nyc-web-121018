import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      alphaClicked: false,
      priceClicked: false,
    }
  }

  changeHandler = e => {
    console.log(e.target.value);
    if (e.target.value === 'alpha') {
      this.setState({
        alphaClicked: true,
        priceClicked: false,
      })
      this.props.sortStocks('alpha')
    }
    if (e.target.value === 'price') {
      this.setState({
        alphaClicked: false,
        priceClicked: true,
      })
      this.props.sortStocks('price')
    }
  }

  priceHandler = () => {
    this.props.sortStocks('price')
  }

  fliterHandler = e => {
    this.props.filterStocks(e.target.value)
  }

  render(){
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="alpha" checked={this.state.alphaClicked} onChange={this.changeHandler}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="price" checked={this.state.priceClicked} onChange={this.changeHandler}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.fliterHandler}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    );
  }
}


export default SearchBar;
