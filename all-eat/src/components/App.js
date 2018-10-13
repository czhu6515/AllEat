import React, { Component } from "react";
import { data } from "../firstRequest.js";
import RestaurantList from "./RestaurantList";
import CurrentRestaurant from "./CurrentRestaurant";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      currentRestaurant: {}
    };
  }

  async componentDidMount() {
    //TODO Change to axios GET request
    this.setState({
      restaurants: data,
      currentRestaurant: data[0]
    });
  }

  render() {
    return (
      <div id="main">
        <RestaurantList restaurants={this.state.restaurants} />
        <CurrentRestaurant restaurant={this.state.currentRestaurant} />
      </div>
    );
  }
}

export default App;
