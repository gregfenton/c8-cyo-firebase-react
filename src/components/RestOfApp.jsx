import React, { useContext } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { AuthContext } from '../providers/AuthProvider';
import LoginForm from './LoginForm';

function RestOfApp() {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  return (
    <div className='App'>
      {user ? 'you are logged in!' : 'not logged in 😔'}
      <br/>
      <br/>
      <br/>
      <br/>
      <LoginForm />
    </div>
  );
}

export default RestOfApp;
