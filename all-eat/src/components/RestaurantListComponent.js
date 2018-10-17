//this is the entire list of restuarant (components)

import React, { Component } from "react";
import RestaurantComponent from "./RestarauntComponent";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../CSS/RestaurantListComponent.css'

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
    let myProps = this.props

    // const { restaurantsProp, onClick } = this.props;
    return (
      <Grid container style={{ marginTop: '60px', overflowY:'hidden' }}	
        alignItems={"center"} spacing={24} direction={'row'}	id='rest-list-wrapper' >
          {this.props.restaurantsProp.map(function(e, i) {
            return (
                <RestaurantComponent
                  restaurantProp={e}
                  key={`restID${i}`}
                  changeNo={myProps.changeNo}
                  timeslots={myProps.timeslots}
                />
              );
          })}
      </Grid>
    
    );
  }
}

export default withStyles(styles)(RestaurantListComponent);
