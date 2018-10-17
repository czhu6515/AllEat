//this is the main page that contains the app
import React, { Component } from "react";
import RestaurantListComponent from "./RestaurantListComponent";
import '../CSS/App.css'
import Grid from "@material-ui/core/Grid";
import AppBar from "./AppBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import GID  from "../config"
import Geocode from 'react-geocode';
import UserList from './UserList';


const loadPosition = async () => {
    try {
        const position = await getCurrentPosition();
        return position
    }
    catch (error) {
        console.log(error);
    }
};

const getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};


  // let {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${formatLoc}&radius=1500&type=restaurant&key=${GID}`)


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      currentRestaurant: {},
      selected: {},
      zip: "",
      notifCounter: 0, 
      userList: []
      //userList is going to be the array for the
      //clicked on restaurant components
    };

   

    this.changeNo = this.changeNo.bind(this);
    this.addElementToUserList = this.addElementToUserList.bind(this);
  }

  
  async changeNo(time, rId, boo) {
    
    let num = this.state.notifCounter

    if(boo) {
      let usrArr = this.state.userList.concat({time, rId})
      await this.setState({notifCounter: ++num, userList: usrArr})
    }
    else {
      let filtered = this.state.userList.filter(function(e) {
        console.log(e.time, time)
        return (e.time !== time &&  e.rId !== rId.rId )
      })
      await this.setState({notifCounter: --num, userList: filtered}) 
    }

  }

  addElementToUserList() {
    alert(this.state.buttonID)
  }

  async componentDidMount() {
      console.log("lOOK HERE")
      let geoLoc;
      let position = await loadPosition()
      let formatLoc = `${position.coords.latitude},${position.coords.longitude}`
      // this.setState({zip: formatLoc})
      console.log(formatLoc)
      axios.get(`/foo/${formatLoc}`).then(res => {
          let data = res.data.results
          this.setState({restaurants: data})
      })
}



getZip = () => {
  let zip = document.getElementById("input-base").value
  Geocode.setApiKey(`${GID}`)
  Geocode.fromAddress(`${zip}`).then(
    response => {
      let loc = response.results[0].geometry
      let formatLoc = `${loc.location.lat},${loc.location.lng}`
      axios.get(`/foo/${formatLoc}`).then(res => {
          let data = res.data.results
          this.setState({restaurants: data})
      })
    }
  )

}

  // handleClick() {
  //   this.setState({
  //     currentRestaurant: data[Number(window.location.pathname.slice(1))]
  //   });
  // }

  
  render() {
    return (
      <Grid container={true} direction={"column"} justify={"center"}>
        <Router>
          <div>
            <div>
            <AppBar getZip={this.getZip} count={this.state.notifCounter} />
            </div>
            <div>
              <Route exact path='/' render={() =>  <RestaurantListComponent restaurantsProp={this.state.restaurants} changeNo={this.changeNo} addEltoUL={this.addElementToUserList}/>} />
              <Route path='/userlist' render={() => <UserList userList={this.state.userList} />} />
            </div>
          </div>
        </Router>
      </Grid>
    );
  }
}

export default App;
