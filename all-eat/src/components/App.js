import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      retaurants: [],
      currentRestaurant={} 
    };
  }

  async componentDidMount() {
  
  }


  render() {
    return <h1>Best App Ever!</h1>;
  }
}

export default App;
