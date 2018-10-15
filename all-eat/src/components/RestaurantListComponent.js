//this is the entire list of restuarant (components)

import React, { Component } from "react";
import Restaurant from "./RestarauntComponent";
import styles from '../CSS/RestaurantListComponent.css';
import { Scrollbars } from 'react-custom-scrollbars';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';

class RestaurantListComponent extends Component {

  sayHello = () => {
    this.props.onClick()
  }


// componentWillReceiveProps(nextProps) {
//     //if
// }


  render() {
    const {restaurantsProp, onClick} = this.props
    return (
      <Grid alignContent={'center'} spacing={10}>
        <div className = "restaurant-list">
          <div className="actual-list">
            <Scrollbars
            autoHeight
            autoHeightMin={100}
            autoHeightMax={700}>
              {restaurantsProp.map(function(e, i) {
                return (
                <Link to={`${i}`}>
                  <Card raised={true}>
                    <Restaurant
                      restaurantProp={e}
                      key={`restInd${i}`}
                      onClick={onClick}
                      />
                  </Card>
                </Link>
                )
              })}
            </Scrollbars>
          </div>
        </div>
      </Grid>
    );
  }
}

export default RestaurantListComponent;
