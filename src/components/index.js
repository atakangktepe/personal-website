import React, { Component } from 'react';
import Nav from './nav/index.js';

export default class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        {this.props.children}
      </main>
    )
  }
}
