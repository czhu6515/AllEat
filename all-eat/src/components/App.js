//this is the main page that contains the app
import React, { Component } from "react";
import { data } from "../firstRequest.js";
import RestaurantListComponent from "./RestaurantListComponent";
import CurrentRestaurantComponent from "./CurrentRestaurantComponent";

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
        <RestaurantListComponent restaurantsProp={this.state.restaurants} />
        <CurrentRestaurantComponent restaurantProp={this.state.currentRestaurant} />
      </div>
    );
  }
}

export default App;

