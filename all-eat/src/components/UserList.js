//this will be the page that contains ONLY the user 
//selected restaurants 
import React from 'react';
import Grid from '@material-ui/core/Grid';
import RestaurantComponent from './RestarauntComponent'

export default class UserList extends React.Component {
  render() {
    return (
      <Grid container>
        {this.props.userList.map(function(e , i){
          return(
            <RestaurantComponent
              restaurantProp={e.rId}
              key={`restID${i}`}
            />
          )
        })}
      </Grid>
    )
  }
}