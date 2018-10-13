//this is the entire list of restuarant (components)

import React, { Component } from "react";
import Restaurant from "./RestarauntComponent";
import styles from '../CSS/RestaurantListComponent.css';

class RestaurantListComponent extends Component {

  sayHello = () => {
    this.props.onClick()
  }

  render() {
    const {restaurantsProp, onClick} = this.props
    return (
      <div className = "restaurant-list">
        <div className="actual-list">
          {restaurantsProp.map(function(e, i) {
            return <Restaurant 
              restaurantProp={e} key={`restInd${i}`} onClick={onClick} />;
           })}
        </div>
      </div>      
    );
  }
}

export default RestaurantListComponent;