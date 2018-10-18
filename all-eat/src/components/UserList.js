//this will be the page that contains ONLY the user
//selected restaurants
import React from "react";
import Grid from "@material-ui/core/Grid";
import UserRestComp from "./UserRestComp";
import AppBar from "./AppBar.js";
import "../CSS/UserList.css";

export default class UserList extends React.Component {
  render() {
    return (
      <Grid container>
        <AppBar position="fixed" />
        {this.props.userList.map(function(e, i) {
          return (
            <UserRestComp
              restaurantProp={e.rId}
              time={e.time}
              key={`restID${i}`}
            />
          );
        })}
      </Grid>
    );
  }
}
