import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Messages from './Messages';
import SendMessage from './SendMessage';
// import InlineEdit from 'react-edit-inline';

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

  handleMatchRequest = () => {
    axios
      .post(`/api/users/${this.state.user._id}/match`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ user: res.data }));
  }

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
      <main>
        <h1 className="title is-4"> <strong> Meet: </strong> {user.name} </h1>
        <hr />
        <p className="subtitle"><strong>About me:</strong> {user.bio}</p>
        <p className="subtitle"><strong>Seeking:</strong> {user.seeking}</p>
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
      </main>
    );
  }

}

export default UsersShow;
