import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

// 11 12 1 2 3 4 5 6 7 8 9 10
const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit *2,
    },
  });

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

    render() {
      const { classes } = this.props;

      return (
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Choose Times!</FormLabel>
          <FormGroup>
              {this.timeslot()}
          </FormGroup>
        </FormControl>
        
      )
    }
}


export default withStyles(styles)(Time);