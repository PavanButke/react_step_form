import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
            <br />

            <Button
            
            style={{width: 150,height : 50 , margin : 10 ,background: 'linear-gradient(to right bottom, ##bdc3c7, ##95a5a6)'}} 
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            <br></br>
            <Button
             style={{width: 150,height : 50 , margin : 10 ,background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}} 
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm </Button>

            <Button 
             style={{width: 150, height: 50 , margin : 10, background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}} 
              color="primary"
              variant="contained"
              onClick={this.continue}
            >  Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
