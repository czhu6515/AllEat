//this is the main page that contains the app
import React, { Component } from "react";
import { data } from "../firstRequest.js";
import RestaurantListComponent from "./RestaurantListComponent";
import CurrentRestaurantComponent from "./CurrentRestaurantComponent";
import styles from '../CSS/App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import {AppBar, Toolbar} from '@material-ui/core'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      currentRestaurant: {},
      selected: {}
    };

    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    //TODO Change to axios GET request
    this.setState({
      restaurants: data,
      currentRestaurant: data[0],
      
    });
  }

  handleClick() {
    console.log('hello')
    this.setState({
      currentRestaurant: data[Number(window.location.pathname.slice(1))],
      // selected: data[2]
    });
  }

  render() {
    return (
        <Router>
          <Grid container={true} lg={2} direction={"row"}	>
            {/* <AppBar>
            <Toolbar>
              
            </Toolbar> */}
          {/* </AppBar> */}
            <div id="main">
              <div className="container">
              <CssBaseline />
                <RestaurantListComponent 
                  restaurantsProp={this.state.restaurants} 
                  onClick={this.handleClick}
                />
                <CurrentRestaurantComponent 
                  restaurantProp={this.state.currentRestaurant}
                  selectedRest={this.state.selected} />
              </div>
            </div>
          </Grid>
        </Router>
    );
  }
}

export default App;

