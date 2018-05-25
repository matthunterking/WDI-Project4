import React from 'react';
import axios from 'axios';

import Messages from './Messages';
import SendMessage from './SendMessage';

class UsersShow extends React.Component {

  state = {
    user: null
  }

  componentDidMount() {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }));
  }

  render() {
    if(!this.state.user) return null;
    return(
      <div>
        <h1>show</h1>
        <p>{this.state.user.name}</p>
        <Messages
          user={this.state.user}
        />
        <SendMessage
          user={this.state.user}
        />
      </div>
    );
  }

}

export default UsersShow;
