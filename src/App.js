import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from  './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <button className="btn btn-outline-success" type="button">
                <Link to='/'>Home</Link>
              </button>
              <button className="btn btn-outline-success" type="button">
                <Link to='/library'>Library</Link>
              </button>
            </form>
            <h1 className="first-title">Bloc Jams</h1>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
