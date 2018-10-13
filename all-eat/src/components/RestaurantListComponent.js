//this is the entire list of restuarant (components)

import React, { Component } from "react";
import Restaurant from "./RestarauntComponent";
import styles from '../CSS/RestaurantListComponent.css';

class RestaurantListComponent extends Component {
  render() {
    return (
       <div className = "restaurant-list">
        
        <div className="actual-list">
        {this.props.restaurantsProp.map(function(e, i) {
          return <Restaurant restaurantProp={e} key={` restInd${i} `} />;

          
        })}
        </div>

      </div>
    );
  }
}

export default RestaurantListComponent;