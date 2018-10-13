import React, { Component } from "react";
import Restaurant from "./Restaraunt";

class RestaurantList extends Component {
  render() {
    return (
      <div>
        {this.props.restaurants.map(function(e, i) {
          return <Restaurant restaurant={e} key={`restInd${i}`} />;
        })}
      </div>
    );
  }
}

export default RestaurantList;
