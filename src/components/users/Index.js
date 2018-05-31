import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SortBar from './SortBar';
import Navbar from '../Navbar';
import _ from 'lodash';
import Auth from '../../lib/Auth';
import Compatibility from './Compatibility/Compatibility';

class UsersIndex extends React.Component {

  state = {
    users: [],
    search: '',
    sort: 'name|asc',
    currentUser: null
  }

  componentDidMount() {
    axios
      .get('api/users')
      .then(res => {
        console.log(res.data);
        const currentUser = res.data.filter(user => user._id === Auth.getPayload().sub)[0];
        const otherUsers = res.data.filter(user => user._id !== Auth.getPayload().sub);
        this.setState({ users: otherUsers, currentUser: currentUser }, () => {
          console.log(this.state);
        });
      });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  sortedFilteredUsers = () => {
    const [ field ] = this.state.sort.split('|');
    const re = new RegExp(this.state.search, 'i');
    const filtered = _.filter(this.state.users, user => {
      return re.test(user.gender);
    });
    return _.orderBy(filtered, field);
  }

  render() {
    return (
      <div>
        <Navbar />
        <section className='section'>
          <div className="container">
            <h1 className='featuretext lighttext is-size-1'>Find your Match</h1>
            <SortBar
              handleChange={this.handleChange}
              data={this.state}
            />
            <hr />
            <div className="columns is-multiline">
              {this.sortedFilteredUsers().map(user =>
                <div key={user._id} className='column is-one-quarter'>
                  <div className="profileFrame">
                    <Link
                      to={`users/viewprofile/${user._id}`}
                      user={user}
                    >
                      <div className="imageFrame" style={{ backgroundImage: `url(${user.image})`}}>
                        <div className="indexContent has-text-centered">
                          <p className='featuretext is-size-1'>View profile</p>
                        </div>
                      </div>
                      <p className="is-size-2 featuretext darktext">{user.name}</p>
                      <p className="is-size-3 featuretext darktext">{user.gender} - {user.age}</p>
                      <p className="is-size-3 featuretext darktext">Looking for {user.seeking}</p>
                      <Compatibility
                        userinterests={user.interests}
                        currentuserinterests={this.state.currentUser.interests}
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default UsersIndex;
