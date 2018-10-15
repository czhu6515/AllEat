import React, { Component } from "react";
import ReactDom from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Welcome extends Component {
constructor(props) {
    super(props);
    this.state = {zipcode: ''};
}

onSubmit = (e) => {
  /*
    Because we named the inputs to match their
    corresponding values in state, it's
    super easy to update the state
  */


    this.setState({[e.target.zipcode]: e.zipcode.value});
    alert(this.state.zipcode);

}






render() {
        let zipcode  = this.state.zipcode;
        return(
            <div className="form-group" onSubmit={this.onSubmit}>
                <div className="zipcode-input">
                <label className="form-label" purpose="zipcode">Zipcode: </label>
                <input
                    className="form-input"
                    type="text"
                    zipcode={this.state.zipcode}
                    />
                </div>
                <div>
                    <Button type="submit" variant="outlined" color="primary">
                            Submit
                    </Button>
                </div>

            </div>
        );
    }
}


export default Welcome;
