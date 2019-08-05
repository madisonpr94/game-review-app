import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MouseEvent } from 'react';

export class NavMenu extends React.Component<{}, {}> {

    public onClicked(event: MouseEvent<HTMLElement>) {
        var target = event.currentTarget;
        let ink = target.querySelector('.ink') as HTMLElement;

        if (ink) {
            ink.classList.remove('animate');
        }
        else {
            ink = document.createElement('span');
            ink.classList.add('ink');
            ink.style.width = String(Math.max(target.offsetWidth, target.offsetHeight)) + "px";
            ink.style.height = String(Math.max(target.offsetWidth, target.offsetHeight)) + "px";
            target.appendChild(ink);
        }

        let offsetX = 0;
        let offsetY = 0;

        if (target instanceof HTMLElement) {
            var parent = target.parentElement as HTMLElement;
            parent = parent.parentElement as HTMLElement;
            parent = parent.parentElement as HTMLElement;
            var navbarEle = parent.parentElement as HTMLElement;

            offsetX = event.pageX - target.offsetLeft - navbarEle.offsetLeft;
            offsetY = event.pageY - target.offsetTop - navbarEle.offsetTop;
        }

        ink.style.left = (offsetX - ink.offsetWidth / 2) + 'px';
        ink.style.top = (offsetY - ink.offsetHeight / 2) + 'px';
        ink.classList.add("animate");
    }

    public render() {
        return <div className="nav-container">
            <input type='checkbox' id='navbar-collapse' />
            <label htmlFor='navbar-collapse' className='collapse-label'>
                <i className='fa fa-bars collapse-button'></i>
            </label>
            <div className='main-nav purple'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to={ '/' }>Game Review App</Link>
                </div>
                <div className='navbar-collapse'>
                    <ul className='nav navbar-nav'>
                        <li onClick={this.onClicked.bind(this)}>
                            <NavLink to={'/'} exact activeClassName='active'>
                                <span className="nav-active-marker"> </span>
                                <i className='fa fa-home' /> Home
                            </NavLink>
                        </li>
                        <li onClick={this.onClicked.bind(this)}>
                            <NavLink to={'/viewgames'} activeClassName='active'>
                                <span className="nav-active-marker"> </span>
                                <i className='fa fa-search' /> View games
                            </NavLink>
                        </li>
                        <li onClick={this.onClicked.bind(this)}>
                            <NavLink to={'/addgame'} activeClassName='active'>
                                <span className="nav-active-marker"> </span>
                                <i className='fa fa-plus' /> Add a game
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>;
    }
}
