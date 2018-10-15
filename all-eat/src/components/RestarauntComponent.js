import React, { Component } from "react";
import styles from '../CSS/Restaurant.css';


class RestarantComponent extends Component {
  sayHello = () => {
    this.props.onClick()
  }


  render() {
    return (
      <div className="restaurant" onClick={this.sayHello}>
        {console.log()}
        <div className="rest-item">
          <p className="rest-name">Name: {this.props.restaurantProp.name}</p>
          <p className="rest-address">
            Address: {this.props.restaurantProp.vicinity}
          </p>
          <p className="rest-price">
            Price Level: {this.props.restaurantProp.price_level}
          </p>
          <p className="rest-rating">Rating: {this.props.restaurantProp.rating}</p>
          
        </div>
      </div>
    );
  }
}

export default RestarantComponent;

