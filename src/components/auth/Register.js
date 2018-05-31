import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';
import ReactFilestack from 'filestack-react';
import AutoComplete from '../common/AutoComplete';
// const filestackAPI = process.env.FILESTACK_API_KEY;
import { Link } from 'react-router-dom';

const basicOptions = {
  accept: 'image/*',
  fromSources: ['local_file_system'],
  maxSize: 1024 * 1024,
  maxFiles: 1
};

class AuthRegister extends React.Component {

  state = {
    image: null,
    interests: {}
  };

    onSuccess = (result) => {
      this.setState({
        image: result.filesUploaded[0].url
      });
    }

    handleChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    }

    handleInterestChange = ({target: { name, value } }) => {
      const interest = { ...this.state.interests, [name]: value };
      this.setState({ interests: interest }, () => {
        console.log(this.state);
      });
    }

    handlePlaceChange = ({ formatted_address: address, geometry: { location }}) => {
      this.setState({ address, location: location.toJSON() });
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
          <div className="column is-one-quarter brandPanel" />
          <div className="column infoPanel home">
            <h1 className='is-size-1 featuretext lighttext'>Your first step in finding love</h1>
            <form onSubmit={this.handleSubmit}>
              <div className='columns'>
                <div className='column'>
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
                  <div className="field">
                    <AutoComplete id="location" name="address" className="input" placeholder="Address" handlePlaceChange={this.handlePlaceChange} />
                  </div>
                </div>
                <br />
                <div className='column'>
                  <div className="selectionField">
                    <label htmlFor="gender" className="standardtext">Please select your gender</label>
                    <select
                      name="gender"
                      className="select"
                      onChange={this.handleChange}>
                      <option defaultValue="Male">Please Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Transgender">Transgender</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <hr />
                  <div className="selectionField">
                    <label htmlFor="seeking" className="standardtext">Who are you looking for?</label>
                    <select
                      className="select"
                      onChange={this.handleChange}
                      name="seeking">
                      <option defaultValue="Men">Please Select</option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                  <hr />
                  <div className="selectionField numberSelect">
                    <label htmlFor="age" className="standardtext">What is your age?</label>
                    <input
                      className="select"
                      type="number"
                      onChange={this.handleChange}
                      name="age"
                      min="18"
                    ></input>
                  </div>
                </div>
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
              <hr />
              <div className='bottommargin'>
                <p className="standardtext">Find your perfect match by answering the questions below:</p>
              </div>
              <div className='columns'>
                <div className='column'>
                  <div className="selectionField columns">
                    <div className="column">
                      <label htmlFor="interests" className="featureText">Cats or Dogs?</label>
                    </div>
                    <div className="column">
                      <select
                        className="select"
                        onChange={this.handleInterestChange}
                        name="animals">
                        <option defaultValue="neither">Please Select</option>
                        <option value="cats">Cats</option>
                        <option value="dogs">Dogs</option>
                        <option value="neither1">Neither</option>
                      </select>
                    </div>
                  </div>
                  <div className="selectionField columns">
                    <div className="column">
                      <label htmlFor="interests" className="featureText">Night in or night out?</label>
                    </div>
                    <div className="column">
                      <select
                        className="select"
                        onChange={this.handleInterestChange}
                        name="evening">
                        <option defaultValue="neither">Please Select</option>
                        <option value="in">Night In</option>
                        <option value="out">Night Out</option>
                        <option value="neither2">Neither</option>
                      </select>
                    </div>
                  </div>
                  <div className="selectionField columns">
                    <div className="column">
                      <label htmlFor="interests" className="featureText">Beach or city break?</label>
                    </div>
                    <div className="column">
                      <select
                        className="select"
                        onChange={this.handleInterestChange}
                        name="holiday">
                        <option defaultValue="neither">Please Select</option>
                        <option value="beach">Beach</option>
                        <option value="city">City Break</option>
                        <option value="neither3">Neither</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='column'>
                  <div className="selectionField columns">
                    <div className="column">
                      <label htmlFor="interests" className="featureText">Resturant or takeaway?</label>
                    </div>
                    <div className="column">
                      <select
                        className="select"
                        onChange={this.handleInterestChange}
                        name="food">
                        <option defaultValue="neither">Please Select</option>
                        <option value="resturant">Resturant</option>
                        <option value="takeaway">Takeaway</option>
                        <option value="neither4">Neither</option>
                      </select>
                    </div>
                  </div>
                  <div className="selectionField columns">
                    <div className="column">
                      <label htmlFor="interests" className="featureText">Romantic comedy or horror?</label>
                    </div>
                    <div className="column">
                      <select
                        className="select"
                        onChange={this.handleInterestChange}
                        name="film">
                        <option defaultValue="neither">Please Select</option>
                        <option value="romantic">Romantic comedy</option>
                        <option value="horror">Horror</option>
                        <option value="neither5">neither</option>
                      </select>
                    </div>
                  </div>
                </div>
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
            <div className='columns'>
              <Link to="/" className="button redButton">Back to homepage</Link>
            </div>
          </div>
        </div>
      );
    }
}

export default AuthRegister;
