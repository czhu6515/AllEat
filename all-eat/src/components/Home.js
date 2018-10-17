import React, {Component} from 'react'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

export default class Home extends Component {
  render(){
    return(
      <Grid>
        <InputBase
          onKeyDown={this.keyPress}
          required={true}
          placeholder="New Zip..."
          id="input-base"
        />
        <Link to='/restaurants'>
          <Button
            color='secondary' 
            onClick={this.getZip}>
            LET'S MEET!
          </Button>
        </Link>
      </Grid>
    )
  }
}