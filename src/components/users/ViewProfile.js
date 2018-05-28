import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';

class ViewProfile extends React.Component {

  state = {
    user: null
  };

  componentDidMount () {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }));
  }


  render() {
    const { user } = this.state;
    if(!this.state.user) return null;
    return (
      <div>
        <Link to={'/users'}>
          <Navbar />
          <div className="columns">
            <div
              className="column leftpanel brandPanel"
              style={{ backgroundImage: `url(${user.image})`}}
            />
            <div className="column rightpanel">
              <h1 className="is-size-1 darktext"> <strong> Meet: </strong> {user.name} </h1>
              <hr />
              <p className="darktext is-size-4"><strong>About me:</strong> {user.bio}</p>
              <p className="darktext is-size-4"><strong>Gender:</strong> {user.gender}</p>
              <p className="darktext is-size-4"><strong>Seeking:</strong> {user.seeking}</p>
            </div>
          </div>
        </Link>
      </div>

    );
  }
}

export default ViewProfile;
