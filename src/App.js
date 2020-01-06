import React, { Component } from "react";
import RegisterPage from "./Routes/RegisterPage";
import { Route,Switch } from "react-router-dom";
import LoginPage from './Routes/LoginPage';
import HomePage from "./Components/HomePage";
import AddWorkout from "./Components/AddWorkout/AddWorkout";
import PrivateRoute from './Components/Utils/PrivateRoute';
import PublicOnlyRoute from './Components/Utils/PublicOnlyRoute';
import NoPageFound from './Routes/NoPageFound';
import "./App.css";


export class App extends Component {
  state={
    hasError: false,
    loggedIn: false
  }
  static getDerrivedStateFromError(error) {
    console.error(error)
    return{hasError: true}
  }
  render() {
    return (
      <div className="App">

        <main className="App_main">
          {this.state.hasError && <p className='red'> There was an Error!</p>}
          <Switch>
            <Route exact path={"/"}
              component={HomePage}
            />
            <PublicOnlyRoute path={'/Login'}
              component={LoginPage}
            />
            <PublicOnlyRoute path={'/Register'}
              component={RegisterPage}
            />
            <PrivateRoute path={'/AddWorkout/:workoutsId'}
              component={AddWorkout}
            />
            <Route 
              component={NoPageFound}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

// Set up prior to 1/6
// <Router>
//           <Route exact path="/">
//             <HomePage />
//           </Route>

//           <Route path="/Register">
//             <Register />
//           </Route>

//           <Route path="/Login">
//             <Login />
//           </Route>
          
//           <Route path="/AddWorkout">
//             <AddWorkout />
//           </Route>

//         </Router>