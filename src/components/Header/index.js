import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Header extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-medium','is-primary','is-bold')}>
            <div className={'hero-body'}>
                <div className={'container'}>
                    <h1 className={'title'}>{c.title}</h1>
                    <h1 className={'subtitle'}>{c.subtitle}</h1>
                    <a className={classNames('button', 'is-primary', 'is-outlined')}>{c.register}</a>
                </div>
            </div>
        </section>    
    );
  }
}

export default Header;
