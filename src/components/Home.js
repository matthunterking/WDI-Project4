import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homeOptions">
      <h1 className='title is-1'>Destination❤️Love</h1>
      <Link to="/register" className="navbar-item">Register</Link>
      <Link to="/login" className="navbar-item">Login</Link>
    </div>
  );
};

export default withRouter(Home);
