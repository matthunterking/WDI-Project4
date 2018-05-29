import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class SendMessage extends React.Component {
  state = {
    from: null,
    to: null,
    messages: []
  };

  componentDidMount = () => {
    this.getFromData();
    this.getToData();
    // axios
    //   .get(`/api/users/${this.props.user}`)
    //   .then(res => this.setState({ from: res.data }, () => {
    //     console.log('from', this.state.from);
    //   }));
    // axios
    //   .get(`/api/users/${this.props.selectedmatch}`)
    //   .then(res => this.setState({ to: res.data }, () => {
    //     this.getMessages();
    //   }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState( { [name]: value } );

  }

  getFromData = () => {
    axios
      .get(`/api/users/${this.props.user}`)
      .then(res => this.setState({ from: res.data }, () => {
        console.log('from', this.state.from);
      }));
  }

  getToData = () => {
    axios
      .get(`/api/users/${this.props.selectedmatch}`)
      .then(res => this.setState({ to: res.data }, () => {
        console.log('this.state at todata', this.state);
        this.getMessages();
      }));
  }

  getMessages = () => {
    const fromId = this.state.from._id.toString();
    const messages = this.state.from.messages.concat(this.state.to.messages);
    const filteredmessages = messages.filter(message => {
      console.log(message.to);
      return message.from._id === fromId || message.to === fromId;
    });
    this.setState({ messages: filteredmessages}, () => {
      console.log('this.state after message filter', this.state);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/message', this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => {
        this.getFromData();
        this.getToData();
      });
  }

  render() {
    if(!this.state.from) return null;
    return (
      <div>
        <div>
          {this.state.messages.map(message =>
            <div key={message._id} className="box">
              <article className="media">
                <div className="media-left">
                  <div style={{ backgroundImage: `url(${message.from.image})`}} className="messageprofile"/>
                </div>
                <div className="media-content">
                  <div className="content">
                    <div>
                      <strong>{message.from.name}</strong>
                      <br />
                      <p>{message.content}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="content" placeholder="message"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SendMessage;
