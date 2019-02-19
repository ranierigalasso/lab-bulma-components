import React, { Component } from 'react';
import Navbar from './component/Navbar';
import FormField from './component/FormField';
import CoolButton from './component/CoolButton';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton is-small is-danger>Button 1</CoolButton>
        <CoolButton is-large is-primary>Button 2</CoolButton>
        <CoolButton is-large is-warning>Button 3</CoolButton>
      </div>
    );
  }
}

export default App;