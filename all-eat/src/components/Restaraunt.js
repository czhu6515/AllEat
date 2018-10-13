import React, { Component } from "react";

class Restarant extends Component {
  render() {
    return (
      <div className="restaurant">
        <p className="rest-name">Name: {this.props.restaurant.name}</p>
        <p className="rest-address">
          Address: {this.props.restaurant.vicinity}
        </p>
        <p className="rest-price">
          Price Level: {this.props.restaurant.price_level}
        </p>
        <p className="rest-rating">Rating: {this.props.restaurant.rating}</p>
        <hr />
      </div>
    );
  }
}

export default Restarant;
