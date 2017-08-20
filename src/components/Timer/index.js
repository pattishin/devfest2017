import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Timer extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-small','is-warning','is-bold')}>
            <div className={'hero-body'}>
                <div className={'container'}>
                    <h1>{c.placeholder}</h1>
                </div>
            </div>
        </section>
    );
  }
}

export default Timer;
