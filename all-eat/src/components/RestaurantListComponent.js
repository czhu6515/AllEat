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
    // const { restaurantsProp, onClick } = this.props;
    return (
      <Grid alignContent={"center"} spacing={24}>
        <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={500}>
          <Grid alignContent={"center"} spacing={24} m={2}>
            {this.props.restaurantsProp.map(function(e, i) {
              return (
                <Link to={`${i}`}>
                  <Grid item xs={12} m={6} >
                    <Paper><RestaurantComponent
                      restaurantProp={e}
                      key={`restInd${i}`}
                    />
                    </Paper>
                  </Grid>
                </Link>
              );
            })}
            </Grid>
        </Scrollbars>
      </Grid>
    );
  }
}

export default withStyles(styles)(RestaurantListComponent);
