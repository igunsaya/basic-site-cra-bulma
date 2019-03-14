import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    return (
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <p class="title">Fullheight hero with navbar</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Panel;
