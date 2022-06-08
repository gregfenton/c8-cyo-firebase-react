import React, { useContext } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { FirebaseContext } from '../providers/FirebaseProvider';

function RestOfApp() {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  console.log('app is', app);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          **** Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>
          Firebase app info:
          <br />
          <br />
          {JSON.stringify(app, null, 2)}
        </pre>
      </header>
    </div>
  );
}

export default RestOfApp;
