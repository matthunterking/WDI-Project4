import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Auth from '../../lib/Auth';
import Navbar from '../Navbar';

class ViewProfile extends React.Component {

  state = {
    user: null
  };

  componentDidMount () {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => {
        console.log(Auth.getPayload().sub);
      }));
  }

  handleMatchRequest = () => {
    axios
      .post(`/api/users/${this.state.user._id}/match`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ user: res.data }));
  }

  matchRequestIsPending = (user) => {
    const loggedInUser = Auth.getPayload().sub;
    return user.pendingMatchRequests.find(() => loggedInUser);
  }



  render() {
    const { user } = this.state;

    if(!this.state.user) return null;
    return (
      <div>
        <Navbar />
        <section className='section'>
          <div className="container">
            <h1 className='darktext is-size-1'>Your matches</h1>
            <hr className='darktext' />
            <Link to={'/users'}>
              <div className="columns">
                <div
                  className="column leftpanel brandPanel"
                  style={{ backgroundImage: `url(${user.image})`}}
                />
                <div className="column profilePanel rightpanel">
                  <div className="showtitle">
                    <h1 className='is-size-2 darktext'>Meet</h1>
                    <button className="button backButton">X</button>
                  </div>
                  <h1 className='is-size-1 darktext'>{user.name}</h1>
                  <div>
                    <p className="darktext is-size-4 bio">{user.bio}</p>
                  </div>
                  <div>
                    <p className="darktext is-size-4"><strong>Age:</strong> {user.age}</p>
                    <p className="darktext is-size-4"><strong>Gender:</strong> {user.gender}</p>
                    <p className="darktext is-size-4"><strong>Location:</strong> {user.address}</p>
                    <p className="darktext is-size-4"><strong>Seeking:</strong> {user.seeking}</p>
                  </div>
                  {this.matchRequestIsPending(user) && <p
                    className="darktext is-size-4 has-text-centered">
                    Request sent
                  </p>}
                  {!this.matchRequestIsPending(user) && <button
                    className="button redirectButton"
                    onClick={this.handleMatchRequest}>
                  Connect with {user.name}
                  </button>}
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default ViewProfile;
