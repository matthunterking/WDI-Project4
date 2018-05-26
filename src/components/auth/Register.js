import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';
import ReactFilestack from 'filestack-react';

const basicOptions = {
  accept: 'image/*',
  fromSources: ['local_file_system'],
  maxSize: 1024 * 1024,
  maxFiles: 1
};

class AuthRegister extends React.Component {

  state = {
    image: null
  };

  onSuccess = (result) => {
    this.setState({
      image: result.filesUploaded[0].url
    });
  }

    onError = (error) => {
      console.error('error', error);
    }

    handleChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      axios.post('/api/register', this.state)
        .then(res =>  {
          Auth.setToken(res.data.token);
          Flash.setMessage('info', res.data.message);
        })
        .then(() => this.props.history.push('/users'))
        .catch(() => {
          Flash.setMessage('danger', 'Invalid credentials');
          this.props.history.replace('/register');
        });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              className="input"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <input
              className="input"
              name="name"
              placeholder="name"
              onChange={this.handleChange}
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
            <option selected value="Male">Please Select</option>
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
            <option selected value="Men">Please Select</option>
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
            />
          </div>
          <ReactFilestack
            apikey="AOMNdTfLRb2JoY4KejONwz"
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

export default AuthRegister;
