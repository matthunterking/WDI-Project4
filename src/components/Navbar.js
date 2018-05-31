import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';

class Navbar extends React.Component {

  state = {
    navIsOpen: false
  }

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }

  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }

  goToProfile = () => {
    this.props.history.push(`/users/${Auth.getPayload().sub}`);
  }

  goToMessages = () => {
    this.props.history.push(`/users/${Auth.getPayload().sub}/messages`);
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item featuretext darktext">Destination ❤️ Love</Link>
          <a role="button" className={`navbar-burger ${this.state.navIsOpen? 'is-active' : ''}`} onClick={this.handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {Auth.isAuthenticated() &&
              <Link to="/users" className="navbar-item featuretext darktext">See the Lovers</Link> }
            {Auth.isAuthenticated() &&
              <a onClick={this.goToProfile} className="navbar-item featuretext darktext">My Profile</a> }
            {Auth.isAuthenticated() &&
              <a onClick={this.goToMessages} className="navbar-item featuretext darktext">Messages</a> }
            {Auth.isAuthenticated() &&
              <a onClick={this.handleLogout} className="navbar-item featuretext darktext">Logout</a>}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
