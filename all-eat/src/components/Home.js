import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import '../CSS/Home.css'
import Paper from '@material-ui/core/Paper';
import Image from '../imgs/main.jpeg'

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      width: '98vw',
      height: '98vh',
      overflowX: 'undefined'
  }
};

export default class Home extends Component {
  render(){
    return(
      <Paper style={styles.paperContainer} id='home-paper'>
        <div id='home-box'>
          <h1>Meet 'n Eat!</h1>
          <TextField
            id="filled-name"
            label="Zip Code"
            margin="normal"
            variant="filled"
          />
          <Link to='/restaurants'>
            <Button
              variant='contained'
              color='secondary' 
              onClick={this.getZip}>
              LET'S MEET!
            </Button>
          </Link>
        </div>
      </Paper>
    )
  }
}