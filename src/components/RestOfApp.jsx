import React, { useContext } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { AuthContext } from '../providers/AuthProvider';
import LoginForm from './LoginForm';
import HeroesList from './HeroesList';
import AddHeroForm from './AddHeroForm';
import HeroesCount from './HeroesCount';
import CallCloudFunction from './CallCloudFunction';

function RestOfApp() {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  return (
    <div className='App'>
      {user ? `you are logged in! (${user.email})` : 'not logged in 😔'}
      <br />
      <br />
      <LoginForm />
      <br />
      <br />
      <CallCloudFunction />
    </div>
  );
}

export default RestOfApp;
