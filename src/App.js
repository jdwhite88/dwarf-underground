import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Ad from './Ad';
import OtherArticles from './OtherArticles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <Ad />
          <OtherArticles />
        </main>
        <footer class="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 class="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
