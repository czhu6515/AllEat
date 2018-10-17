import React, { Component } from "react";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from "@material-ui/core";
import '../CSS/Time.css'

// 11 12 1 2 3 4 5 6 7 8 9 10


class Time extends Component {

  timeslot = () => {
    let array = [];
    let tNum = "";
    for (let i = 0; i < 11; i++){
            
      if(i === 0){
        tNum = '11am';
      }
      else if(i === 1){
        tNum = '12pm'
      }
      else {
        tNum = `${i -1}pm` ;
      }
      let aNum = tNum
      array.push(<FormControlLabel
                    label={aNum}
                    control={
                      <Checkbox 
                        value={aNum}
                        onChange={ (e, boo)=> this.props.changeNo(aNum, this.props.rID, boo) } />
                    }
                  />)
    }   
      return array;
  }

  timeSlots = (timeslot) => {
    let array = []
    for (let i = 0; i < 11; i++){
      array.push(<Grid item spacing={8}>{timeslot}</Grid>)
    }
    return array
  }
      /* myProps.timeslot[0][myProps.rID.id][0].timeslot */

    render() {
      const myProps = this.props;
      // let specificTimeSlots = myProps.timeslots.filter(function(e) {
      //   return (e === myProps.rID.id)
      // })
      console.log('from Time', myProps)
    
      return (  
        <FormControl component="fieldset">
          <FormGroup styles={{display:'flex'}}>
            <div id='checkboxes'>{this.timeslot()}</div>
            {/* <Grid container item spacing={8}>{this.timeSlots()}</Grid> */}
          </FormGroup>
        </FormControl>

      )
      
      // } else {
      //   console.log(myProps.people);
      //   return null
        
      // }
    }
}


export default Time;