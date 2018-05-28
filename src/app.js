import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import Auth from './lib/Auth';
import Home from './components/Home';

import UsersIndex from './components/users/Index';
import UsersShow from './components/users/Show';
import ViewProfile from './components/users/ViewProfile';
import Messaging from './components/users/Messaging';
import UsersEdit from './components/users/Edit';
import FlashMessages from './components/common/FlashMessages';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  handleLogout = () => {
    Auth.logout();
  }

  render() {
    return (
      <Router>
        <main>
          <FlashMessages />
          <Switch>
            <Route path="/users/viewprofile/:id" component={ViewProfile} />
            <Route path="/users/:id/edit" component={UsersEdit} />
            <Route path="/users/:id/messages" component={Messaging} />
            <Route path="/users/:id" component={UsersShow} />
            <Route path="/users" component={UsersIndex} />
            <Route path="/login" component={AuthLogin} />
            <Route path="/register" component={AuthRegister} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
