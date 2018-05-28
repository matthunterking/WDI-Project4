import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';
import ReactFilestack from 'filestack-react';
// const filestackAPI = process.env.FILESTACK_API_KEY;

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
        <div className="columns">
          <div className="column brandPanel" />
          <div className="column infoPanel home">
            <h1 className='is-size-1 featureText'>Your first step in finding love</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <input
                  className="input"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
              </div>
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
              <div className="selectionField">
                <label htmlFor="gender" className="featureText">Please select your gender</label>
                <select
                  name="gender"
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
              </div>
              <hr />
              <div className="selectionField">
                <label htmlFor="seeking" className="featureText">Who are you looking for?</label>
                <select
                  className="select"
                  onChange={this.handleChange}
                  name="seeking">
                  <option selected value="Men">Please Select</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <hr />
              <div className="field">
                <input
                  type="textarea"
                  className="textarea"
                  name="bio"
                  placeholder="Tell use about yourself"
                  onChange={this.handleChange}
                />
              </div>
              <div className="registerNav">
                <ReactFilestack
                  apikey="AOMNdTfLRb2JoY4KejONwz"
                  buttonText="Upload Photo"
                  buttonClass="button redirectButton"
                  options={basicOptions}
                  onSuccess={this.onSuccess}
                  onChange={this.handleChange}
                  onError={this.onError}
                />
                <button className="button submitButton">Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
}

export default AuthRegister;
