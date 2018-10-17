import React, { Component } from "react";
import styles from "../CSS/Restaurant.css";
import Grid from "@material-ui/core/Grid";
import Time from './Time';
import GID from '../config';


class RestarantComponent extends Component {
  sayHello = () => {
    this.props.onClick();
  };

  render() {
    return (
      <Grid item id='restaurant' xs={12} md={6} xl={3}>
        <h2 id='rest-name'>{this.props.restaurantProp.name}</h2>
        <p id="rest-address">{this.props.restaurantProp.vicinity}</p>
        <div id='rest-PR'>
          <p id="rest-price">
            Price Level: {this.props.restaurantProp.price_level}
          </p>
          <p id="rest-rating">
            Rating: {this.props.restaurantProp.rating}
          </p>
        </div>
        <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
              this.props.restaurantProp.photos
                ? this.props.restaurantProp.photos[0].photo_reference
                : null
            }&key=${GID}`}
          />
        <Time changeNo={this.props.changeNo} rID={this.props.restaurantProp} addEltoUL={this.props.addEltoUL}/>
      </Grid>
    );
  }
}

export default RestarantComponent;
