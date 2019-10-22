import React from 'react';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route,Switch, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
        </Switch>
        </Router>
      </>
    )
  }
}


export default App;
