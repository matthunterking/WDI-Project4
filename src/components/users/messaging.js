import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Auth from '../../lib/Auth';
import Messages from './Messages';
import SendMessage from './SendMessage';

class Messaging extends React.Component {

  state = {
    user: null,
    selectedMatch: {
      id: 123
    }
  };

  componentDidMount () {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }));
  }

  handleSelection = (e) => {
    console.log(e.target.id);
    this.setState({ selectedMatch: e.target.id}, () => {
      console.log(this.state);
    });
  }

  render() {
    const { user } = this.state;
    if(!this.state.user) return null;
    return (
      <div>
        <Navbar />
        <section className='section'>
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter">
                <h1 className='darktext is-size-1'>My Matches</h1>
                {user.acceptedMatchRequests.map(user =>
                  <div key={user.userId.id}>
                    <div className="columns"
                      onClick={this.handleSelection}
                    >
                      <div className="column is-one-quarter">
                        <img id={user.userId._id} src={user.userId.image} />
                      </div>
                      <div className="column is-one-half">
                        <p id={user.userId._id} className="is-size-4 darktext featureText">{user.userId.name} {user.userId._id}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="column is-three-quarters">
                <h1 className='darktext is-size-1'>My Messages</h1>
                {Auth.isCurrentUser(user) && <Messages currentuser={user} selecteduser ={this.state.selectedMatch}/> }
                {Auth.isCurrentUser(user) && <SendMessage user={this.state.selectedMatch}/> }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Messaging;
