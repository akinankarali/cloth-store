import React from 'react';
import '../style/app.css';
import Header from '../components/Header'
import Login from './Login'
import SignUp from './Signup'
import { Switch, Route } from 'react-router-dom'
import Card from '../components/Card'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Header}/>  
        <Route path="login" component={Login}/>  
        <Route path="signup" component={SignUp}/>  
      </Switch>
      <div className="content container mx-auto pt-12">
        <div className="cards-wrapper flex flex-wrap -mx-4 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    
    </div>
  );
}

export default App;
