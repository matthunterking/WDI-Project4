import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


class UsersShow extends React.Component {

  state = {
    user: null
  };

  componentDidMount () {
    console.log(Auth.getUser());
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }));
  }

  handleDelete = () => {
    axios
      .delete(`/api/users/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/users'));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/register', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
      })
      .then(() => this.props.history.push('/users'))
      .catch(() => this.props.history.replace('/login'));
  };

  handleMatchConfirm = (e) => {
    axios
      .post(`/api/users/${e.target.name}/accept`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ user: res.data }));
  }

  handleMatchReject = (e) => {
    axios
      .post(`/api/users/${e.target.name}/reject`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ user: res.data }));
  }

  render() {
    const { user } = this.state;
    if(!this.state.user) return null;
    return(
      <div>
        <Navbar />
        <section className='section'>
          <div className="container">
            <div>
              <h1 className='darktext is-size-1 featuretext'>{user.name}</h1>
              <hr />
              <div className="columns profileFrame">
                <div className="column">
                  <div className="imageframeprofile" style={{ backgroundImage: `url(${user.image})`}}>
                  </div>
                </div>
                <div className="column profileContainer">
                  <h1 className='is-size-2 featuretext darktext'>My details</h1>
                  <hr />
                  <p className="is-size-4 darktext standardText">{user.bio}</p>
                  <p className="is-size-4 darktext standardText">Looking for: {user.seeking}</p>
                  <p className="is-size-4 darktext standardText">Age: {user.age}</p>
                  <p className="is-size-4 darktext standardText">Gender: {user.gender}</p>
                  <p className="is-size-4 darktext standardText">Matches: {user.acceptedMatchRequests.length}</p>
                  <div className="registerNav">
                    <Link to={`/users/${user._id}/edit`}
                      className="button submitButton"
                    >Edit Profile</Link>
                    <button className="button redButton"
                      onClick={this.handleDelete} >
                      Delete Profile</button>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h1 className='darktext is-size-2 featuretext'>Pending Match Requests</h1>
                  <hr className='darktext' />
                  {user.pendingMatchRequests.map(match =>
                    <div key={match._id}>
                      <div className="columns profileFrame profileframesmall">
                        <div className="column is-one-quarter">
                          <img src={match.image} />
                        </div>
                        <div className="column is-one-half">
                          <p className="is-size-2 darktext featuretext">{match.name}</p>
                          <p className="is-size-2 darktext featuretext">{match.age}</p>
                        </div>
                        <div className="column is-one-quarter">
                          {match._id && <div>
                            <button
                              className="button redirectButton"
                              onClick={this.handleMatchConfirm}
                              name= {match._id}
                            >Match with {match.name}
                            </button>
                            <button
                              className="button redButton"
                              onClick={this.handleMatchReject}
                              name= {match._id}
                            >Reject {match.name}</button>
                            <Link to={`/users/viewprofile/${match._id}`}
                              user={match}
                              className="button submitButton">View Profile
                            </Link>
                          </div>}
                        </div>
                      </div>
                    </div> )}
                  {user.sentMatchRequests.map(match =>
                    <div key={match._id}>
                      <div className="columns profileFrame profileframesmall">
                        <div className="column is-one-quarter">
                          <img src={match.image} />
                        </div>
                        <div className="column is-one-half">
                          <p className="is-size-2 darktext featuretext">{match.name}</p>
                          <p className="is-size-2 darktext featuretext">{match.age}</p>
                          <p className="is-size-4 darktext featuretext">Request Sent</p>
                        </div>
                        <div className="column is-one-quarter">
                        </div>
                        <Link to={`/users/viewprofile/${match._id}`}
                          user={match}
                          className="button submitButton">View Profile
                        </Link>
                      </div>
                    </div> )}
                </div>
                <div className="column">
                  <h1 className='darktext is-size-2 featuretext'>My Matches</h1>
                  <hr />
                  {user.acceptedMatchRequests.map(match =>
                    <div key={match.id}>
                      <div className="columns profileFrame profileframesmall">
                        <div className="column is-one-quarter">
                          <img src={match.image} />
                        </div>
                        <div className="column is-one-quarter">
                          <p className="is-size-2 darktext featuretext">{match.name}</p>
                          <p className="is-size-2 darktext featuretext">{match.age}</p>
                        </div>
                        <div className="column is-one-half">
                          <Link
                            to={`/plandate/${match._id}`}
                            className="button datebutton"
                          >❤️ Plan a date with {match.name} ❤️</Link>
                          <Link to={`/users/viewprofile/${match._id}`}
                            user={match}
                            className="button submitButton">View Profile
                          </Link>
                        </div>
                      </div>
                    </div> )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default UsersShow;
