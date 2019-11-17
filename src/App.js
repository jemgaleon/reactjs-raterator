import React, { Component } from 'react';
import { Raterator } from './Components/Raterator.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <nav>
            <FontAwesomeIcon
              icon={faBars} />
            <a href="#">
              <img
                id="logo"
                src="" />
            </a>
          </nav>
        </header>
        <main>
          <Raterator />
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}