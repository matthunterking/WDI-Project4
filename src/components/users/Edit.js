import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import ReactFilestack from 'filestack-react';
const filestackAPI = process.env.FILESTACK_API_KEY;

const basicOptions = {
  accept: 'image/*',
  fromSources: ['local_file_system'],
  maxSize: 1024 * 1024,
  maxFiles: 1
};

class UsersEdit extends React.Component {

    state = {
      user: null,
      errors: null
    };
  // when the component has mounted, make a request to get the info from the user
  // it needs this to pre fill the form
    componentDidMount(){
      axios.get(`/api/users/${this.props.match.params.id}`)
        .then(res => this.setState(res.data, () => console.log(this.state)));
    }

  handleChange = ({ target: { name, value } }) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;

    axios
      .put(`/api/users/${id}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push(`/users/${id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    const user = this.state;
    if(!user) return null;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            className="input"
            name="name"
            placeholder="Email"
            onChange={this.handleChange}
            value={user.name}
          />
        </div>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            value={user.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            className="input"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
            onChange={this.handleChange}
          />
        </div>
        <label>Please select your gender
        <select
          className="select"
          onChange={this.handleChange}>
          <option selected value={user.gender}>{user.gender}</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-binary">Non-binary</option>
          <option value="Transgender">Transgender</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
        </label>
        <hr />
        <label>What are you seeking?
        <select
          className="select"
          onChange={this.handleChange}>
          <option selected value={user.seeking}>{user.seeking}</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Both">Both</option>
        </select>
        </label>
        <hr />
        <div className="field">
          <input
            type="textarea"
            className="textarea"
            name="bio"
            placeholder="bio"
            onChange={this.handleChange}
            value={user.bio}
          />
        </div>
        <ReactFilestack
          apikey={filestackAPI}
          buttonText="Upload Photo"
          buttonClass="ui medium button gray"
          options={basicOptions}
          onSuccess={this.onSuccess}
          onChange={this.handleChange}
          onError={this.onError}
        />

        <button className="button is-primary">Submit</button>
      </form>
    );
  }

}

export default UsersEdit;
