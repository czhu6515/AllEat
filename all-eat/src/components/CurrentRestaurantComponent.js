//this is the page that contains the information about
//the user selected restaurant

import React, { Component } from "react";
import axios from "axios";
import styles from "../CSS/CurrentRestaurantComponent.css";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";

class CurrentRestaurantComponent extends Component {
  render() {
    return (
      <Grid
        alignItems={"center"}
        direction={"column"}
        justify={"space-between"}
        color={"primary"}
      >
        <Grid>
          <h1>{this.props.restaurantProp.name}</h1>
        </Grid>
        <Grid>
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${
              this.props.restaurantProp.photos
                ? this.props.restaurantProp.photos[0].photo_reference
                : null
            }&key=AIzaSyADV91zCNOJP51CkmFbYAekjklYesdQxvY`}
          />
        </Grid>
      </Grid>
    );
  }
}

export default CurrentRestaurantComponent;
