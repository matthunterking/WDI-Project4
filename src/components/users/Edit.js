import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import ReactFilestack from 'filestack-react';
import Navbar from '../Navbar';
import AutoComplete from '../common/AutoComplete';
// const filestackAPI = process.env.FILESTACK_API_KEY;

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
      <div>
        <Navbar />
        <section className='section'>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <input
                  className="input"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={user.name}
                />
              </div>
              <div className="field">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={user.email}
                />
              </div>
              <div className="field">
                <AutoComplete id="location" name="address" className="input" placeholder="Address" handlePlaceChange={this.handlePlaceChange} />
              </div>
              <div className="selectionField numberSelect">
                <label htmlFor="age" className="standardtext">What is your age?</label>
                <input
                  className="select"
                  type="number"
                  onChange={this.handleChange}
                  name="age"
                  min="18"
                  value={user.age}></input>
              </div>
              <hr />
              <div className="selectionField">
                <label htmlFor="gender" className="standardtext">Please select your gender</label>
                <select
                  className="select"
                  onChange={this.handleChange}
                  name="gender">
                  <option selected value={user.gender}>{user.gender}</option>
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
                  <option selected value={user.seeking}>{user.seeking}</option>
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
                  placeholder="bio"
                  onChange={this.handleChange}
                  value={user.bio}
                />
              </div>
              <ReactFilestack
                apikey="AOMNdTfLRb2JoY4KejONwz"
                buttonText="Upload Photo"
                buttonClass="button redirectButton"
                options={basicOptions}
                onSuccess={this.onSuccess}
                onChange={this.handleChange}
                onError={this.onError}
              />
              <hr />
              <button className="button submitButton">Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }

}

export default UsersEdit;
