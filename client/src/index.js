import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/Routes';
//import Login from './components/auth/Login';


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  {/*   <Login /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

