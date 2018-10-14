//this is the page that contains the information about 
//the user selected restaurant

import React, { Component } from "react";
import axios from "axios";
import styles from '../CSS/CurrentRestaurantComponent.css';


class CurrentRestaurantComponent extends Component {

  render() {
    return (
      <div className="current-rest" >
        <div className="child-current">
          <h1>This is the Current Restaurant</h1>
          <p>Name: {this.props.restaurantProp.name}</p>
          <p>
            Photo: <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.restaurantProp.photos ? this.props.restaurantProp.photos[0].photo_reference : null}&key=AIzaSyADV91zCNOJP51CkmFbYAekjklYesdQxvY`} />
          </p>
         </div>
      </div>
    );
  }
}

export default CurrentRestaurantComponent;

