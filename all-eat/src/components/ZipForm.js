import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class ZipForm extends React.Component {
  state = {
    open: true
  };

  //   handleClickOpen = () => {
  //     this.setState({ open: true });
  //   };

  handleZipClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        {/* <Button onClick={this.handleClickOpen}>Open form dialog</Button> */}
        <Dialog
          open={this.state.open}
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
            <Button onClick={this.handleZipClose} color="primary">
              Let's Go!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
