import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Ad from './Ad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <Ad />
        </main>

      </div>
    );
  }
}

export default App;
