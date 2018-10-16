import React, { Component } from "react";
import styles from "../CSS/Restaurant.css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

// 11 12 1 2 3 4 5 6 7 8 9 10

class Time extends Component {
    
    timeslot = () => {
        let array = [];
        let tNum = "";
        for (let i = 0; i < 11; i++){
            
            if(i === 0){
                tNum = '11:00am';
            }
            else if(i === 1){
                tNum = '12:00pm'
            }
            else {
                tNum = `${i -1}:00pm` ;
            }
            array.push(<Button variant="outlined" size="small" color="primary" onClick={this.props.changeNo}>{tNum}</Button>);
        }
        // console.log(array);
        return array;
    }

    render() {
        
        return (
            <div>
                {this.timeslot()}
            </div>

          
        )
    }
}


export default Time;