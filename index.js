import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/common/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
