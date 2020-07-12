import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/common/Header'
import Content from './components/common/Content'

import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <Header/>
        <Content/>
      </React.Fragment>
    );
  }
}

render(<App />, document.querySelector('#root'));
