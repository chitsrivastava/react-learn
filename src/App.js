import React from 'react';
import './App.css';
import Notification from './components/notification/Notification'
import Download from './components/download/Download'
import Login from './components/login/Login'
import Call from './components/call/Call'

import { BrowserRouter,Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


function App() {
    return (
    <div>
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/notification" component={Notification} />
      <Route path="/download" component={Download} />
      <Route path="/call" component={Call}/>
      <Route exact path="/" render ={()=>(<h3>Welcome to John Deere Financials</h3>)}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
