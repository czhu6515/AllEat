//this is the entire list of restuarant (components)

import React, { Component } from "react";
import RestaurantComponent from "./RestarauntComponent";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class RestaurantListComponent extends Component {
  sayHello = () => {
    this.props.onClick();
  };

  // componentWillReceiveProps(nextProps) {
  //     //if
  // }

  render() {
    console.log(this.props)
    let myProps = this.props

    // const { restaurantsProp, onClick } = this.props;
    return (
      <Grid alignContent={"center"} spacing={24} id='rest-list-wrapper'>
        <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={500}>
          {this.props.restaurantsProp.map(function(e, i) {
            return (
              <Link to={`${i}`}>
                <RestaurantComponent
                  restaurantProp={e}
                  key={`restID${i}`}
                  changeNo={myProps.changeNo}
                />
              </Link>
            );
          })}
        </Scrollbars>
      </Grid>
    );
  }
}

export default withStyles(styles)(RestaurantListComponent);
