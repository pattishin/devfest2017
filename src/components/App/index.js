import React, { Component } from 'react';
import Header from '../Header';
import Events from '../Events';
import Timer from '../Timer';
import Footer from '../Footer';
import classNames from 'classnames';
import 'bulma/css/bulma.css'
import s from './App.css';

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Header />
        <Timer />
        <Events />
        <Footer />
      </div>
    );
  }
}

export default App;
