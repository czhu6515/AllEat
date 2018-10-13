import React, { Component } from "react";
import styles from '../CSS/RestaurantListComponent.css';


class RestarantComponent extends Component {
  // constructor(props) {
  //   super(props)
  //   this.props.handleClick = this.props.handleClick.bind(this)
  // }
  // userSelection() {
  //   this.props.handleClick()
  // }

    sayHello = () => {
      this.props.onClick()
    }

  render() {
    return (
      <div className="restaurant">
        <button onClick={this.sayHello}>CLICK ME</button>

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
      </div>
    );
  }
}

export default RestarantComponent;

