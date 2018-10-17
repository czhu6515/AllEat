import React, { Component } from "react";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from "@material-ui/core";

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

  awesome = (people) => {
    let array = []
    for (let i = 0; i < 11; i++){
      array.push(<Grid item spacing={8}>{people}</Grid>)
    }
    return array
  }

    render() {
      const { classes } = this.props;
      return (
        <FormControl component="fieldset">
        <FormLabel component="legend">Choose Times!</FormLabel>
          <FormGroup styles={{display:'flex'}}>
            <Grid container item>{this.timeslot()}</Grid>
            <Grid container item spacing={8}>{this.awesome(this.props.people)}</Grid>
          </FormGroup>
        </FormControl>
        
      )
    }
}


export default Time;