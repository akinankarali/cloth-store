import React from 'react';
import '../style/app.css';
import Header from '../components/Header'
import Login from './Login'
import SignUp from './Signup'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Header}/>  
        <Route path="login" component={Login}/>  
        <Route path="signup" component={SignUp}/>  
      </Switch>
    </div>
  );
}

export default App;
