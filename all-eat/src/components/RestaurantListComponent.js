//this is the entire list of restuarant (components)

import React, { Component } from "react";
import Restaurant from "./RestarauntComponent";

class RestaurantListComponent extends Component {
  render() {
    return (
      <div>
        {this.props.restaurantsProp.map(function(e, i) {
          return <Restaurant restaurantProp={e} key={`restInd${i}`} />;
        })}
      </div>
    );
  }
}

export default RestaurantListComponent;