import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Footer extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-small', 'is-bold')}>
            <div className={'hero-body'}>
                <div className={classNames('content', 'has-text-centered')}>
                    <div className={classNames('columns', 'is-gapless', 'is-centered')}>
                        <div className={classNames('column')}>{c.partners}</div>
                        <div className={classNames('column')}>{c.visitors}</div>
                        <div className={classNames('column')}>{c.contact}</div>
                    </div>
                </div>
            </div>
        </section>    
    );
  }
}

export default Footer;
