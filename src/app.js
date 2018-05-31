import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthRegister from './components/auth/Register';
import Auth from './lib/Auth';
import Home from './components/Home';

import UsersIndex from './components/users/Index';
import MyProfile from './components/users/MyProfile';
import ViewProfile from './components/users/ViewProfile';
import PlanDate from './components/common/PlanDate';
import Messaging from './components/messaging/Messaging';
import UsersEdit from './components/users/Edit';
import FlashMessages from './components/common/FlashMessages';
import NotFound from './components/common/NotFound';

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
            <Route path="/users/:id" component={MyProfile} />
            <Route path="/plandate/:id" component={PlanDate} />
            <Route path="/users" component={UsersIndex} />
            <Route path="/register" component={AuthRegister} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
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
