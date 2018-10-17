//this will be the page that contains ONLY the user 
//selected restaurants 
import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserRestComp from './UserRestComp'

export default class UserList extends React.Component {

  render() {
    return (
      <Grid container>
        {console.log("LOOK HERE")}
        {console.log(this.props.userList)}
        {this.props.userList.map(function(e , i){
          return(
            <UserRestComp
              restaurantProp={e.rId}
              time={e.time}
              key={`restID${i}`}
            />
          )
        })}
      </Grid>
    )
  }
}