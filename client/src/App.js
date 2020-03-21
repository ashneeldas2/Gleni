import React, { Component } from 'react';
import Head from './components/Head'
import Customers from './components/Customers';

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Customers />
      </div>
    );
  }
}

export default App;
