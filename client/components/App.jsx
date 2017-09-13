import React from 'react';
import Routes from 'router/routes';
import Navbar from 'components/Navbar';
import { withRouter } from 'react-router-dom';
import auth from 'services/authentication';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setUser.bind(this);
    this.componentWillMount.bind(this);
    this.removeUser.bind(this);
    auth.getUser()
    .then((res) => {
      this.setState({'user': res.data})
    });
  }

  componentWillMount() {
    if (this.state.user === null && auth.isAuthenticated()) {
      auth.getUser()
      .then((res) => {
        this.setState({'user': res.data})
      })
    }
  }

  removeUser () {
    this.setState({ 'user': {} });
  }

  setUser () {
    auth.getUser()
    .then((res) => {
      this.setState({'user': res.data})
    })
  }


  render() {
    return (
      <div>
        <Navbar removeUser={ this.removeUser.bind(this) }/>
        <Routes user={ this.state.user } setUser={ this.setUser.bind(this) } {...this.props}/>
      </div>
    );
  }
}

export default withRouter(App);
