import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthLogin from './components/auth/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <h1>❤️ Destination Love ❤️</h1>
          <Route path="/login" component={AuthLogin} />
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
