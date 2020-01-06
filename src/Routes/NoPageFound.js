import React, { Component } from 'react';
import { Section } from '../Components/Utils/Utils'; 

export default class NoPageFound extends Component {
  render() {
    return (
      <Section className='NoPageFound'>
        <h2> -The Page You Are Looking For Was Not Found </h2>
        <p> Try going back to the previous page. </p>
      </Section>
    )
  }
}
