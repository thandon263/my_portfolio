import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      color: undefined
    };
  }

  handleToggle = () => this.setState({open: !this.state.open, color: '#00BCD4'});

    render() {
      return (
        <div className="header">
          <a
            onClick={this.handleToggle}>
            #theHeroGenius
          </a>
          <Drawer width={200} openSecondary={true} open={this.state.open}>
            <AppBar title="More Info." />
            <MenuItem>Home</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Hire Me.</MenuItem>
          </Drawer>
        </div>
      );
    }
  }
