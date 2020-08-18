import React from 'react';
import './App.css';
import Notification from './components/notification/Notification'
import Download from './components/download/Download'
import Login from './components/login/Login'
import { BrowserRouter,Route } from 'react-router-dom';


function App() {
  return (
    <div>

    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/notification" component={Notification} />
      <Route path="/download" component={Download} />
    </BrowserRouter>
    </div>
  );
}

export default App;
