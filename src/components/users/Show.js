import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import Messages from './Messages';
import SendMessage from './SendMessage';


class UsersShow extends React.Component {

  state = {
    user: null,
    isCurrentUser: false
  }

  componentDidMount() {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => {
        console.log(this.state);
      }));
  }

  render() {
    if(!this.state.user) return null;
    return(
      <div>
        <h1>show</h1>
        <p>{this.state.user.name}</p>
        <p>{this.state.user._id}</p>
        {Auth.isCurrentUser(this.state.user) && <Messages
          user={this.state.user}
        />}
        {!Auth.isCurrentUser(this.state.user) && <SendMessage
          user={this.state.user}
        />}
      </div>
    );
  }

}

export default UsersShow;
