import React, { Component } from "react";
import RestaurantListComponent from "./RestaurantListComponent";
import "../CSS/App.css";
import Grid from "@material-ui/core/Grid";
import AppBar from "./AppBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import GID from "../config";
import Geocode from "react-geocode";
import UserList from "./UserList";
import Home from "./Home";

const loadPosition = async () => {
  try {
    const position = await getCurrentPosition();
    return position;
  } catch (error) {
    console.log(error);
  }
};

const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      currentRestaurant: {},
      selected: {},
      zip: "",
      notifCounter: 0,
      userList: [],
      timeslots: [],
      times: [10, 11, 12]
    };
    this.changeNo = this.changeNo.bind(this);
    this.addElementToUserList = this.addElementToUserList.bind(this);
  }

  // TODO:
  async changeNo(time, rId, boo) {
    let num = this.state.notifCounter;
    if (boo) {
      let usrArr = this.state.userList.concat({ time, rId });
      await this.setState({ notifCounter: ++num, userList: usrArr });
    } else {
      let filtered = this.state.userList.filter(function(e) {
        return e.time !== time && e.rId !== rId.rId;
      });
      await this.setState({ notifCounter: --num, userList: filtered });
    }
  }

  addElementToUserList() {
    alert(this.state.buttonID);
  }

  async componentDidMount() {
    let timeslots;
    let position = await loadPosition();
    let formatLoc = `${position.coords.latitude},${position.coords.longitude}`;
    let res = await axios.get(`/foo/${formatLoc}`);
    let data = res.data.results;
    await this.setState({ restaurants: data });
    timeslots = this.state.restaurants.map((e, i) => {
      let obj = {};
      obj[e.id] = this.state.times.map((e, i) => {
        return { id: e, people: Math.ceil(Math.random() * 10) };
      });
      return obj;
    });
    await this.setState({ timeslots: timeslots });
  }

  //TODO:
  getZip = () => {
    let zip = document.getElementById("input-base").value;
    Geocode.setApiKey(`${GID}`);
    Geocode.fromAddress(`${zip}`).then(response => {
      let loc = response.results[0].geometry;
      let formatLoc = `${loc.location.lat},${loc.location.lng}`;
      axios.get(`/foo/${formatLoc}`).then(res => {
        let data = res.data.results;
        this.setState({ restaurants: data });
      });
    });
  };

  render() {
    let myProps = this.props;

    return (
      <Grid container={true} direction={"column"} justify={"center"}>
        <Router>
          <div id="big-box">
            <Route
              exact
              path="/"
              render={() => <Home getZip={this.getZip} />}
            />
            <Route
              exact
              path="/restaurants"
              render={() => (
                <div>
                  <AppBar
                    getZip={this.getZip}
                    count={this.state.notifCounter}
                  />
                  <RestaurantListComponent
                    timeslots={this.state.timeslots}
                    restaurantsProp={this.state.restaurants}
                    changeNo={this.changeNo}
                  />
                </div>
              )}
            />
            <Route
              path="/userlist"
              render={() => <UserList userList={this.state.userList} />}
            />
          </div>
        </Router>
      </Grid>
    );
  }
}

export default App;
