import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Time from "./Time";
import GID from "../config";
import "../CSS/Restaurant.css";

class RestarantComponent extends Component {
  sayHello = () => {
    this.props.onClick();
  };

  render() {
    let myProps = this.props;

    return (
      <div id="rest-wrapper">
        <div id="restaurant">
          <h2 id="rest-name">{myProps.restaurantProp.name}</h2>
          <p id="rest-address">{myProps.restaurantProp.vicinity}</p>
          <div id="rest-PR">
            <p id="rest-price">
              Price Level: {myProps.restaurantProp.price_level}
            </p>
            <p id="rest-rating">Rating: {myProps.restaurantProp.rating}</p>
          </div>
          <img
            id="rest-img"
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
              myProps.restaurantProp.photos
                ? myProps.restaurantProp.photos[0].photo_reference
                : null
            }&key=${GID}`}
          />
        </div>
        <Time changeNo={myProps.changeNo} rID={myProps.restaurantProp} />
      </div>
    );
  }
}

export default RestarantComponent;
