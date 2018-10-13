//this is the page that contains the information about 
//the user selected restaurant

import React, { Component } from "react";
import axios from "axios";
import styles from '../CSS/CurrentRestaurantComponent.css';

class CurrentRestaurantComponent extends Component {
  // async getPhoto() {
  //   await axios.get(
  //     `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
  //       this.props.restaurant.photos.photo_reference
  //     }&key=AIzaSyADV91zCNOJP51CkmFbYAekjklYesdQxvY`
  //   );
  // }

  render() {
    return (

      <div className="current-rest">

        <div className="child-current">
          <h1>This is the Current Restaurant</h1>
          <p>Name: {this.props.restaurantProp.name}</p>
          <p>
            {console.log(this.props.restaurantProp.photos)}
            {/* Photo: <img src={this.getPhoto()} /> */}
          </p>
      </div>

      </div>



    );
  }
}

export default CurrentRestaurantComponent;
