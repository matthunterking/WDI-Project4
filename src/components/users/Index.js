import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        <div className="columns">
          {this.state.users.map(user =>
            <div key={user._id}>
              <Link to={`/users/${user._id}`}>
                <div className="heartframe column">
                  <div className="heartcontent" style={{ backgroundImage: `url(${user.image})`}}>
                    <p className="title is-1">{user.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

}

export default UsersIndex;
