import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
    const styles = {
      button: {
        marginRight: 15,
        marginTop: 15
      }
    }
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Confirm Details' />
          <br />
          <List>
            <ListItem
              primaryText='First Name'
              secondaryText={firstName}
            />
            <ListItem
              primaryText='Last Name'
              secondaryText={lastName}
            />
            <ListItem
              primaryText='Email'
              secondaryText={email}
            />
            <ListItem
              primaryText='Occupation'
              secondaryText={occupation}
            />
            <ListItem
              primaryText='City'
              secondaryText={city}
            />
            <ListItem
              primaryText='Bio'
              secondaryText={bio}
            />
          </List>
          <RaisedButton
            label='Confirm and Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Back'
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Confirm;
