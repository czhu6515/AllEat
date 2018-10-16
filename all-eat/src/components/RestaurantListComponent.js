//this is the entire list of restuarant (components)

import React, { Component } from "react";
import RestaurantComponent from "./RestarauntComponent";
import { Scrollbars } from "react-custom-scrollbars";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Time from './Time';

class RestaurantListComponent extends Component {
  sayHello = () => {
    this.props.onClick();
  };

  // componentWillReceiveProps(nextProps) {
  //     //if
  // }

  render() {
    // const { restaurantsProp, onClick } = this.props;
    return (
      <Grid alignContent={"center"} spacing={32}>
        <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={500}>
          {this.props.restaurantsProp.map(function(e, i) {
            return (
              <Link to={`${i}`}>
                <Grid item>
                  <RestaurantComponent
                    restaurantProp={e}
                    key={`restInd${i}`}
                    // onClick={onClick}
                  />
                </Grid>
              </Link>
            );
          })}
        </Scrollbars>
      </Grid>
    );
  }
}

export default RestaurantListComponent;
