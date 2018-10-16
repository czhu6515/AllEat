import React, { Component } from "react";
import styles from "../CSS/Restaurant.css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

// 11 12 1 2 3 4 5 6 7 8 9 10

class Time extends Component {

    // changeNo = (e, time, rId) => {
    //     console.log(e, time, rId);
    //     // this.props.changeNo()
    // }


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
            let aNum = tNum
            array.push(<Button key={i}
                        buttonID={{time:`${tNum}`, rID:this.props.rID}} 
                        variant="outlined" 
                        size="small" 
                        color="primary" 
                        onClick={ (e)=> this.props.changeNo(aNum, this.props.rID) }>{tNum}</Button>);
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