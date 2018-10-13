import React, { Component } from "react";
import RestaurantComponent from "./RestarauntComponent";

class RestaurantList extends Component {
  render() {
    return (
      <div>
        {this.props.restaurants.map(function(e, i) {
          return <RestaurantComponent restaurantProp={e} key={`restInd${i}`} />;
        })}
      </div>
    );
  }
}

export default RestaurantList;
