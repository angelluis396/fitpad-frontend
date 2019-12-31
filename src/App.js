import React, { Component } from "react";
import Register from "./Components/LoginRegister/Register";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from './Components/LoginRegister/Login';
import HandleLogin from './Services/userservice'
import HomePage from "./Components/HomePage";
import "./App.css";

// const User = ({match}) => {
//   return (<h1> Welcome {match.params.username} </h1>)
// }
export class App extends Component {
  state={
    loggedIn: false
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>

          {/* <Link to="/Login"> 
            Login
            <HandleLogin />
          </Link>
          <Link to="/Register"> Register </Link> */}

          <Route path="/Login">
            <Login />
          </Route>

          {/* <Route path="/user/:username"component={User} /> */}

        </Router>
      </div>
    );
  }
}

export default App;
