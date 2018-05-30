import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Auth from '../../lib/Auth';
import MessageSelection from './MessageSelection';
import MessagePanel from './MessagePanel';
import MessageSent from './MessageSent';

class Messaging extends React.Component {

  state = {
    currentUser: null,
    selectedMatch: null,
    content: null,
    messages: [],
    messageSent: false
  };

  componentDidMount () {
    axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ currentUser: res.data }));
  }

  handleSelection = (e) => {
    axios
      .get(`/api/users/${e.target.id}`)
      .then(res => this.setState({ selectedMatch: res.data }, () => {
        const filteredmessages = this.getMessages(this.state.currentUser.messages);
        this.setState({ messages: filteredmessages }, () => {
          console.log(this.state);
        });
      }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState( { [name]: value });
  }

  handleSentClick = () => {
    this.setState({ messageSent: false } );
  }

  getMessages = (messages) => {
    const user1 = this.state.currentUser._id.toString();
    const user2 = this.state.selectedMatch._id.toString();
    const allmessages = messages.concat(this.state.selectedMatch.messages);
    const filteredmessages = allmessages.filter(message => {
      return (message.from._id === user1 && message.to._id === user2) || (message.from._id === user2 && message.to._id === user1);
    }).sort((a, b) => a.sentAtRaw > b.sentAtRaw);
    return filteredmessages;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      from: this.state.currentUser._id,
      to: this.state.selectedMatch._id,
      content: this.state.content
    };
    axios
      .post('/api/message', data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        this.setState({ messages: this.getMessages(res.data.messages) });
      });
  }

  render() {
    if(!this.state.currentUser) return null;
    return (
      <div>
        <Navbar />
        <section className='section'>
          <div className="container">
            <div className="columns">
              <div className="column is-one-quarter">
                <h1 className='darktext is-size-1'>My Matches</h1>
                <MessageSelection
                  currentUser={this.state.currentUser}
                  handleSelection={this.handleSelection}
                />
              </div>
              <div className="column is-three-quarters">
                {this.state.messageSent && <MessageSent handleSentClick={this.handleSentClick} /> }
                {!this.state.selectedMatch && <h1 className='darktext is-size-1'>Click on a match to see messages</h1>}
                {this.state.selectedMatch && <h1 className='darktext is-size-1'>Your conversation with {this.state.selectedMatch.name}</h1>}
                {this.state.selectedMatch && <MessagePanel
                  messages={this.state.messages}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                /> }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Messaging;
