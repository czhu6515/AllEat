import React, { Component } from "react";
import styles from '../CSS/Restaurant.css';
import Grid from '@material-ui/core/Grid';

class RestarantComponent extends Component {

  sayHello = () => {
    this.props.onClick()
  }


  render() {
    return (
      <Grid item={true} onClick={this.sayHello} color={'#FFAB91'}>
        <h3>
          {this.props.restaurantProp.name}
        </h3>
        <p className="rest-address">
          {this.props.restaurantProp.vicinity}
        </p>
        <p className="rest-price">
          Price Level: {this.props.restaurantProp.price_level}
        </p>
        <p className="rest-rating">
          Rating: {this.props.restaurantProp.rating}
        </p>  
      </Grid>
    );
  }
}

export default RestarantComponent;

