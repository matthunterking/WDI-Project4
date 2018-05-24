import React from 'react';
import axios from 'axios';

class UsersIndex extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    axios
      .get('api/users')
      .then(res => this.setState({ users: res.data }));
  }

  render() {
    return (
      <div>
        <h1>Index</h1>
        {this.state.users.map(user =>
          <div key={user.id} className="columns">
            <div className="column">
              <p>{user.image}</p>
            </div>
            <div className="column">
              <p>{user.name}</p>
            </div>
          </div>)}
      </div>
    );
  }

}

export default UsersIndex;
