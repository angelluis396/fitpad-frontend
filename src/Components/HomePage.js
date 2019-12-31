// import React from 'react';
// // import FitPadButtons from '../Components/FitPadButtons';
// export default function HomePage() {
//   return (
//     <div>
     
//     </div>
//   )
// }


import React, { Component } from 'react'
import userservices from '../Services/userservice';
import Login from './LoginRegister/Login';
import Register from './LoginRegister/Register';
import './HomePage.css'
export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to FitPad </h1>
        <p> Summary of fitpad goes here</p>
        <div className="buttons">
          <button onClick={this.Login} > Log In </button>
          <button onClick={this.Register} > Register </button>
        </div>
       
      </div>
    )
  }
}
// onClick={this.login}
// onClick={this.register}
export default HomePage
