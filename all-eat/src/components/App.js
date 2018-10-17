import React, { Component } from "react";
import RestaurantListComponent from "./RestaurantListComponent";
import '../CSS/App.css'
import Grid from "@material-ui/core/Grid";
import AppBar from "./AppBar";
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";
import GID  from "../config"
import Geocode from 'react-geocode';
import UserList from './UserList';
import Home from './Home'

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
      people: []
      //userList is going to be the array for the
      //clicked on restaurant components
    };
    this.changeNo = this.changeNo.bind(this);
    this.addElementToUserList = this.addElementToUserList.bind(this);
  }

  
  async changeNo(time, rId, boo) {
    
    let num = this.state.notifCounter
    let peep = this.state.people
    
    if(boo) {
      let usrArr = this.state.userList.concat({time, rId})
      await this.setState({notifCounter: ++num, userList: usrArr, people: ++peep})
      console.log(this.state.people)
    }
    else {
      let filtered = this.state.userList.filter(function(e) {
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

  
  
  render() {
    let myProps = this.props

    return (
      <Grid container={true} direction={"column"} justify={"center"}>
        <Router>
          <div>
            <Route exact path='/' 
              render={() => <Home getZip={this.getZip}  />} />
            <Route exact path='/restaurants' 
              render={() => <div><AppBar getZip={this.getZip} count={this.state.notifCounter} /><RestaurantListComponent people={this.state.people} restaurantsProp={this.state.restaurants} changeNo={this.changeNo} /></div>} />
            <Route path='/userlist' 
              render={() => <UserList userList={this.state.userList} />} />
          </div>
        </Router>
      </Grid>
    );
  }
}

export default App;
