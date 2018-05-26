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
        <div className="columns is-multiline">
          {this.state.users.map(user =>
            <div key={user._id} className='column is-one-third'>
              <Link to={`/users/${user._id}`}>
                <div className="indexFrame" style={{ backgroundImage: `url(${user.image})`}}>
                  <div className="indexContent has-text-centered">
                    <p className="is-size-2">{user.name}</p>
                    <p className="is-size-3">{user.gender} {user.age}</p>
                    <p className="is-size-3">Looking for {user.seeking}</p>
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
