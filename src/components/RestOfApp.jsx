import React, { useContext } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { AuthContext } from '../providers/AuthProvider';
import LoginForm from './LoginForm';
import HeroesList from './HeroesList';
import AddHeroForm from './AddHeroForm';
import HeroesCount from './HeroesCount';

function RestOfApp() {
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  return (
    <div className='App'>
      {user ? 'you are logged in!' : 'not logged in 😔'}
      <br />
      <br />
      <br />
      <br />
      <LoginForm />
      <br />
      <br />
      <br />
      {user && <AddHeroForm />}
      <br />
      <br />
      <br />
      <HeroesCount />
      <br />
      <br />
      <br />
      <HeroesList />
    </div>
  );
}

export default RestOfApp;
