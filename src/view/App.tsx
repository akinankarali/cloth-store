import React from 'react'
import '../style/app.css'
import Home from "./Home"
import Login from './Login'
import SignUp from './Signup'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (   //Checkif if is loading
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>        
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </div> 
  )
}

export default App
