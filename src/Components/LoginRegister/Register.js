import React, { Component } from 'react'
import './Register.css'
import AuthApiService from '../../Services/auth-api-service'


export class Register extends Component {
 static defaultProps = {
   onRegistrationSuccess: () => {}
 }

 state = {error: null}

 handleSubmit = event => {
  event.preventDefault();
  const {first_name, last_name, user_name, user_email, password} = event.target;

  this.setState({error:null})
  AuthApiService.postUser({
    first_name: first_name.value,
    last_name: last_name.value,
    user_name: user_name.value,
    user_email: user_email.value,
    password: password.value
  })
  .then(user => {
    first_name.value=''
    last_name.value=''
    user_name.value=''
    user_email.value=''
    password.value=''
    this.props.onRegistrationSuccess();
  })
  .catch(res => {
    this.setState({error: res.error});
  });
 };

  render() {
    const {error}=this.state;
    return (
      <div>
        <form className="registerForm" onSubmit={this.handleSubmit}>

          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>

          <div className="FormField">
            <label className="formLabel" htmlFor="first_name"> First Name:<required/> </label>
            <input required type="text" id="first_name" className="formInput" placeholder="First Name" name="first_name"/>
          </div>

          <div className="FormField">
            <label className="formLabel" htmlFor="last_name"> Last Name:<required/> </label>
            <input  required type="text" id="last_name" className="formInput" placeholder="Last Name" name="last_name"/>
          </div>

          <div className="FormField">
            <label className="formLabel" htmlFor="username"> Username:<required/> </label>
            <input required type="text" id="user_name" className="formInput" placeholder="Your Username" name="user_name"/>
          </div>

          <div className="FormField">
            <label className="formLabel" htmlFor="user_email"> Email:<required/> </label>
            <input required type="email" id="user_email" className="formInput" placeholder="Your Email" name="user_email"/>  
          </div>

          <div className="FormField">
            <label className="formLabel" htmlFor="password"> Password:<required/> </label>
            <input required type="text" id="password" className="formInput" placeholder="Password" name="password"/>
          </div>

          <div className="FormField">
            <label className="formCheckBox">
              <input required className="formCheckBox" type="checkbox" name="hasAgreed" /> I Agree to the Terms and Conditions
            </label>
          </div>

          <div className="FormField">
            <button type="submit" className="formButton"> Register </button>
          </div>
         
        </form>
     
      </div>
    )
  }
}

export default Register
