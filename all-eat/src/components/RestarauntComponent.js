//this is ithe indiv restaurant in the total
//restaurant list 

import React, { Component } from "react";
import styles from '../CSS/RestaurantListComponent.css';


class RestarantComponent extends Component {
  render() {
    return (
      <div className="rest-item">
        <p className="rest-name">Name: {this.props.restaurantProp.name}</p>
        <p className="rest-address">
          Address: {this.props.restaurantProp.vicinity}
        </p>
        <p className="rest-price">
          Price Level: {this.props.restaurantProp.price_level}
        </p>
        <p className="rest-rating">Rating: {this.props.restaurantProp.rating}</p>
        <hr />
      </div>
    );
  }
}

export default RestarantComponent;

