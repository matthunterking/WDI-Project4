import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';

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
        <Navbar />
        <div className="container">
          <h1 className='darktext is-size-1'>Your matches</h1>
          <hr className='darktext' />
          <div className="columns is-multiline">
            {this.state.users.map(user =>
              <div key={user._id} className='column is-one-quarter profileFrame'>
                <Link to={`/users/${user._id}`}>
                  <div className="imageFrame" style={{ backgroundImage: `url(${user.image})`}}>
                    <div className="indexContent has-text-centered">
                      <p className='is-size-1'>View profile ❤️</p>
                    </div>
                  </div>
                  <p className="is-size-2 darktext">{user.name}</p>
                  <p className="is-size-3 darktext">{user.gender} {user.age}</p>
                  <p className="is-size-3 darktext">Looking for {user.seeking}</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

}

export default UsersIndex;
