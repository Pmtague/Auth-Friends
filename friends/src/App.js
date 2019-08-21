import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friendsList'>Friends List</Link>
          </li>
          <li>
            <Link to='/newFriend'>New Friend Form</Link>
          </li>
        </ul>
        <Route path='/login' component={ Login } />
        <PrivateRoute exact path='/friendsList' component={ FriendsList } />
        <PrivateRoute exact path='newFriend' component={ NewFriend } />
      </div>
    </Router>
  );
}

export default App;
