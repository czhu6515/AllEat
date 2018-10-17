import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Geocode from 'react-geocode';
import { GID } from '../config.js';
import { BrowserRouter as Router, Link } from 'react-router-dom'








export default class ZipForm extends React.Component {
    constructor() {
        super()
        this.state = {
            open: true,
            zip: ""
        };
    }


  handleZipClose = async (event) => {
      event.preventDefault()
      let zip = document.getElementById("zip").value
     await Geocode.setApiKey(`${GID}`);
      await Geocode.fromAddress(`${zip}`).then(
          response => 
          {
              let loc = response.results[0].geometry
              let formatLoc = `${loc.location.lat},${loc.location.lng}`
              this.setState({zip: formatLoc, open: f})
          }
      )
  };

  render() {
      const {zip, open} = this.state
    return (
      <Router>
        {/* <Button onClick={this.handleClickOpen}>Open form dialog</Button> */}
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
        >
          <DialogTitle id="form-dialog-title">Enter Zip Code</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="zip"
              label="Zip Code"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
              {console.log(zip)}
              <Button onClick={this.handleZipClose} color="primary">
              <Link to={`/restaurants/${zip}`}>Let's Go!</Link>
            </Button>
          </DialogActions>
        </Dialog>
    </Router>
    );
  }
}
