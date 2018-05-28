import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthLogin from './auth/Login';

const Home = () => {
  return (
    <div className="columns home">
      <div className="column brandPanel" />
      <div className="column infoPanel">
        <div>
          <h3 className='is-size-1 featureText'>Destination ❤️ Love</h3>
          <hr />
          <p className="is-size-4 featureText">Welcome to Desitination Love. We take away all the awkwardness of finding
        somewhere to go on your date by giving you geographically convineent options!</p>
        </div>
        <div className="homeNav">
          <AuthLogin />
          <div className="registerContainer">
            <Link className="button redirectButton" to="/register">
            Not registered? Join now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
