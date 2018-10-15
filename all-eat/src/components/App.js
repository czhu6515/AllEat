//this is the main page that contains the app
import React, { Component } from "react";
import { data } from "../firstRequest.js";
import RestaurantListComponent from "./RestaurantListComponent";
import CurrentRestaurantComponent from "./CurrentRestaurantComponent";
import Welcome from "./Welcome.js";
import styles from "../CSS/App.css";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      currentRestaurant: {},
      selected: {}
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    //TODO Change to axios GET request
    axios
      .get("https://randomuser.me/api/?results=10&inc=name,registered&nat=fr")
      .then(json =>
        json.data.results.map(result => ({
          name: `${result.name.first} ${result.name.last}`,
          id: result.registered
        }))
      )
      .then(newData => console.log(newData));
    this.setState({
      restaurants: data,
      currentRestaurant: data[0]
    });
  }

  handleClick() {
    this.setState({
      currentRestaurant: data[Number(window.location.pathname.slice(1))]
    });
  }

  render() {
    return (
      <Grid container={true} lg={2} direction={"column"} justify={"center"}>
        <AppBar>
          <Toolbar />
        </AppBar>
        {/* <Login /> */}
        <Router>
          <Grid
            container
            item
            lg={2}
            direction={"row"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item>
              <RestaurantListComponent
                restaurantsProp={this.state.restaurants}
                onClick={this.handleClick}
              />
            </Grid>
            <Grid item>
              <CurrentRestaurantComponent
                restaurantProp={this.state.currentRestaurant}
                selectedRest={this.state.selected}
              />
            </Grid>
          </Grid>
        </Router>
      </Grid>
    );
  }
}

export default App;
