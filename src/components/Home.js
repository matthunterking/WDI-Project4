import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Flash from '../lib/Flash';
import Auth from '../lib/Auth';

class Home extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/login', this.state)
      .then(res =>  {
        Auth.login(res.data);
        Flash.setMessage('info', res.data.message);
      })
      .then(() => this.props.history.push('/users'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div className="columns home">
        <div className="column brandPanel is-half-tablet" />
        <div className="column infoPanel is-half-tablet">
          <div>
            <h3 className='is-size-1 featuretext lighttext'>Destination ❤️ Love</h3>
            <hr />
            <p className="is-size-3 featuretext lighttext">Meet in the middle...</p>
          </div>
          <div className="homeNav">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <button className="button submitButton">Log in</button>
            </form>
            <div className="registerContainer">
              <Link className="button redirectButton" to="/register">
                Not registered? Join now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
