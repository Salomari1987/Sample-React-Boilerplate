import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import auth from 'services/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.handleLogOut.bind(this);
  }

  handleLogOut () {
    auth.logout();
    this.props.removeUser();
    this.props.history.push('/login');
  }

  render() {
    var authButton = function () {
      if (auth.isAuthenticated()) {
        return (<Menu.Item onClick={this.handleLogOut.bind(this)} position="right">
          Logout
        </Menu.Item>);
      } else {
        return (
          <Menu.Item as={NavLink} to='/login' position="right">
            Login
          </Menu.Item>);
      }
    };

    return (
      <Menu color="orange" size="small">
        <Menu.Item >
          <img src='../assets/images/logo.png' />
        </Menu.Item>
        <Menu.Item exact as={NavLink} to='/'>
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} to='/private'>
          Private
        </Menu.Item>
        {authButton.call(this)}
      </Menu>
    );
  }
}

export default withRouter(Navbar);
