import React from 'react';
import { Form, Segment, Grid } from 'semantic-ui-react';
import auth from 'services/authentication';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
    this.componentWillMount.bind(this);
  }

  componentWillMount() {
    if (auth.isAuthenticated()) {
      this.props.history.push('/');
    }
  }

  handleChange (e ) {
    var state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit (e) {
    var that = this;
    auth.login(this.state)
      .then(function (res) {
        auth.setUser(res.data.token);
        that.props.setUser();
        if (auth.isAuthenticated()) {
          that.props.history.push('/');
        }
      });
  }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment inverted color="orange" >
            <Form inverted size='mini'onSubmit={this.handleSubmit.bind(this)} >
              <Form.Input placeholder='Email' required={true} onChange={this.handleChange.bind(this)} value={this.state.username} name="email"/>
              <Form.Input placeholder='Password' type='password' required={true} value={this.state.password} onChange={this.handleChange.bind(this)} name="password"/>
              <Form.Button inverted size="mini" fluid={true} >Login</Form.Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(Login);
