import React from 'react';
import AutoComplete from '../common/AutoComplete';

const UserForm = ({ handleChange, handleSubmit, handlePlaceChange }) => {
const formInvalid = Object.keys(errors).some(key => errors[key]);


  <form className="columns">
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
        <div className="field">
          <label htmlFor="address">Address</label>
          <AutoComplete id="address" name="address" className="input" placeholder="Address" handlePlaceChange={handlePlaceChange} />
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
  </form>

}

export default UserForm;
