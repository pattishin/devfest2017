import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Events extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-medium','is-info','is-bold')}>
            <div className={'hero-body'}>
                <div className={classNames('content', 'has-text-centered')}>
                    <div className={classNames('columns', 'is-gapless', 'is-centered')}>
                         <div className={classNames('column')}>
                            <p className={'title'}>{c.events[0]}</p>
                            <p className={'subtitle'}>{c.groups[0]}</p>
                        </div>
                         <div className={classNames('column')}>
                            <p className={'title'}>{c.events[1]}</p>
                            <p className={'subtitle'}>{c.groups[1]}</p>
                        </div>
                         <div className={classNames('column')}>
                            <p className={'title'}>{c.events[2]}</p>
                            <p className={'subtitle'}>{c.groups[2]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    );
  }
}

export default Events;
