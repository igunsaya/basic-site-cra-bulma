import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Built on <strong>React</strong> with <strong>Bulma</strong> by Me!{' '}
              <a href="https://github.com/aaronklaser">Aaron Klaser</a>
              <br />
              Copyright 2018
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
