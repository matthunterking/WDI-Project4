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
    // console.log(this.props.match.params.id);
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

  // handleMatchRequest = () => {
  //   axios
  //     .post(`/api/users/${this.state.user._id}/match`, this.state, {
  //       headers: { Authorization: `Bearer ${Auth.getToken()}`}
  //     })
  //     .then(res => this.setState({ user: res.data }));
  // }

  handleMatchConfirm = (e) => {
    console.log(e.target.name);
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
              <h1 className='darktext is-size-1 featureText'>{user.name}</h1>
              <hr className='darktext' />
              <div className="columns">
                <div className="column is-one-quarter">
                  <img src={user.image} />
                </div>
                <div className="column is-three-quarters profileContainer">
                  <p className="is-size-4 standardText">About me: {user.bio}</p>
                  <p className="is-size-4 standardText">Looking for: {user.seeking}</p>
                  <p className="is-size-4 standardText">Age: {user.age}</p>
                  <p className="is-size-4 standardText">Gender: {user.gender}</p>
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
            </div>
            <h1 className='darktext is-size-1 featureText'>Pending Match Requests</h1>
            <hr className='darktext' />
            {user.pendingMatchRequests.map(user =>
              <div key={user.userId.id}>
                <div className="columns">
                  <div className="column is-one-quarter">
                    <img src={user.userId.image} />
                  </div>
                  <div className="column is-one-half">
                    <p className="is-size-4 featureText">{user.userId.name}</p>
                    <p className="is-size-4 standardText">{user.userId.age}</p>
                    <p className="is-size-4 standardText">{user.userId.bio}</p>
                  </div>
                  <div className="column is-one-quarter">
                    <button
                      className="button redirectButton"
                      onClick={this.handleMatchConfirm}
                      name= {user.userId._id}
                    >Match with {user.userId.name}
                    </button>
                    <button
                      className="button redButton"
                      onClick={this.handleMatchReject}
                      name= {user.userId._id}
                    >Reject {user.userId.name}</button>
                  </div>
                </div>
              </div> )}
          </div>
        </section>
      </div>
    );
  }

}

{/* <main>
  <h1 className="title is-4"> <strong> Meet: </strong>  </h1>
  <hr />

  <img src={user.image} />
  {!Auth.isCurrentUser(user) && <button onClick={this.handleMatchRequest}>Connect with {user.name}</button>}
  <hr />


  {user.pendingMatchRequests.map(user =>
    <div key={user.userId.id}>
      <p>{user.userId.name}</p>
      <button
        className="button is-primary"
        onClick={this.handleMatchConfirm}
        name= {user.userId._id}
      >Match with {user.userId.name}
      </button>
      <button
        className="button is-danger"
        onClick={this.handleMatchReject}
        name= {user.userId._id}
      >Reject {user.userId.name}</button>
    </div> )}
  <button>Edit</button>
  <button>Delete</button>
  {Auth.isCurrentUser(user) && <Messages user={user}/> }
  {!Auth.isCurrentUser(user) && <SendMessage user={user}/> }
</main> */}

export default UsersShow;
