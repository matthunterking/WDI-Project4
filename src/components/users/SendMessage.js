import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class SendMessage extends React.Component {
  state = {}

  componentDidMount = () => {
    this.setState({ to: this.props.user._id});
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState( {[name]: value}, () => {
      console.log(this.state);
    } );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('/api/message', this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState(res.data));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="content" placeholder="message"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SendMessage;
