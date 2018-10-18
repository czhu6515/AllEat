import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import GID from "../config";
import Button from "@material-ui/core/Button";

class UserRestComp extends Component {
  sayHello = () => {
    this.props.onClick();
  };

  render() {
    return (
      <Grid item={true} color={"#FFAB91"} id="restaurant">
        <h3>{this.props.restaurantProp.name}</h3>
        <p className="rest-address">{this.props.restaurantProp.vicinity}</p>
        <p className="rest-price">
          Price Level: {this.props.restaurantProp.price_level}
        </p>
        <p className="rest-rating">
          Rating: {this.props.restaurantProp.rating}
        </p>
        <img
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
            this.props.restaurantProp.photos
              ? this.props.restaurantProp.photos[0].photo_reference
              : null
          }&key=${GID}`}
        />
        <Button variant="outlined" size="small" color="primary">
          {this.props.time}
        </Button>
      </Grid>
    );
  }
}

export default UserRestComp;
