//this is the entire list of restuarant (components)

import React, { Component } from "react";
import Restaurant from "./RestarauntComponent";
import styles from '../CSS/RestaurantListComponent.css';
import { Scrollbars } from 'react-custom-scrollbars';

class RestaurantListComponent extends Component {

  sayHello = () => {
    this.props.onClick()
  }



  render() {
    const {restaurantsProp, onClick} = this.props
    return (
      <div className = "restaurant-list">
        <div className="actual-list">
          <Scrollbars 
          autoHeight
          autoHeightMin={100}
          autoHeightMax={1000}>
            {restaurantsProp.map(function(e, i) {
              return <Restaurant 
                restaurantProp={e} key={`restInd${i}`} onClick={onClick} cake={i}
                />;
            })}
           </Scrollbars>
        </div>
      </div>      
    );
  }
}

export default RestaurantListComponent;