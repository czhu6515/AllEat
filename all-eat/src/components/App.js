//this is the main page that contains the app
import React, { Component } from "react";
import { data } from "../firstRequest.js";
import RestaurantListComponent from "./RestaurantListComponent";
import CurrentRestaurantComponent from "./CurrentRestaurantComponent";
import Welcome from './Welcome.js';
import styles from '../CSS/App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import {AppBar, Toolbar} from '@material-ui/core'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import axios from 'axios';


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
      axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
      .then(json => json.data.results.map(result => (
        {
          name: `${result.name.first} ${result.name.last}`,
          id: result.registered
        })))
      .then(newData => console.log(newData))
      this.setState({
          restaurants: data,
          currentRestaurant: data[0],

      });
    }





  handleClick() {
    console.log('hello')
    this.setState({
      currentRestaurant: data[Number(window.location.pathname.slice(1))],
    });
  }

  render() {
    return (

        <div>
        <Welcome zipcode={this.state.zipcode}/>
        <Router>
          <Grid container={true} lg={2} direction={"row"}	>
          //   {/* <AppBar>
          //   <Toolbar>
          //
          //   </Toolbar> */}
          // {/* </AppBar> */}

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
    </div>
    );
  }
}

export default App;
