import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import UsersIndex from './components/users/Index';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <h1 className='title is-1'>❤️ Destination Love ❤️</h1>
          <Switch>
            <Route path="/users" component={UsersIndex} />
            <Route path="/login" component={AuthLogin} />
            <Route path="/register" component={AuthRegister} />
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
