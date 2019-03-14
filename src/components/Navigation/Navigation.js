import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="logo"
            />
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Home
            </a>
            <a class="navbar-item" href="/">
              Documentation
            </a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" href="/">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light" href="/">
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
