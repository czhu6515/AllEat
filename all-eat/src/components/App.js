//this is the main page that contains the app
import React, { Component } from "react";
import { data } from "../firstRequest.js";
import RestaurantListComponent from "./RestaurantListComponent";
import CurrentRestaurantComponent from "./CurrentRestaurantComponent";
import styles from '../CSS/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      currentRestaurant: {}
    };

    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    //TODO Change to axios GET request
    this.setState({
      restaurants: data,
      currentRestaurant: data[5]
    });
  }

  handleClick() {
    console.log('hello')
    this.setState({
      currentRestaurant: data[2]
    });
  }

  render() {
    return (
      <div id="main">
        <div className="container">
          <RestaurantListComponent 
            restaurantsProp={this.state.restaurants} 
            onClick={this.handleClick}
          />
          <CurrentRestaurantComponent 
            restaurantProp={this.state.currentRestaurant} />
        </div>
      </div>
    );
  }
}

export default App;

