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
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/register', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
      })
      .then(() => this.props.history.push('/users'))
      .catch(() => this.props.history.replace('/login'));
  };

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
        <hr />
        <button>Edit</button>
        <button>Delete</button>
        {Auth.isCurrentUser(user) && <Messages user={user}/> }
        {!Auth.isCurrentUser(user) && <SendMessage user={user}/> }
      </main>
    );
  }

}

export default UsersShow;
