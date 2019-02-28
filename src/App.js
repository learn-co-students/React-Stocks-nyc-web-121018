import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

const API = "http://localhost:3000/stocks";

class App extends Component {
  state = {
    stocks: []
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(stockdata => {
        this.setState({ stocks: stockdata });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
