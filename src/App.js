import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
        </main>

      </div>
    );
  }
}

export default App;
