import React, { Component } from 'react';
import Posts from '../blogs/'
import Repos from '../repos/'

class Home extends Component {
  render() {
    return (
      <div>
        home page

        <Repos />
        <Posts />
      </div>
    )
  }
}

export default Home;
