//this is the entire list of restuarant (components)

import React, { Component } from "react";
import Restaurant from "./RestarauntComponent";

class RestaurantListComponent extends Component {

  sayHello = () => {
    this.props.onClick()
  }

  render() {
    const {restaurantsProp, onClick} = this.props
    return (
      <div>
        {restaurantsProp.map(function(e, i) {
          return <Restaurant 
            restaurantProp={e} key={`restInd${i}`} onClick={onClick} />;
        })}
      </div>
    );
  }
}

export default RestaurantListComponent;