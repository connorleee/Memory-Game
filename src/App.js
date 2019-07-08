import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0
  }
  
  render() {
    return (
      <div>
        <nav className="container-fluid bg-light mb-5">
          <div className="row">
            <div className="col-md-4">
              <a className="navbar-brand" href="/">Cars Memory Game</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="col-md-4">
              <h3 className="text-center">Click a tile to begin!</h3>
            </div>

            <div className="col-md-4">
              <h3 className="text-right">Current Score: 0 | High Score: 0</h3>
            </div>
          </div>
        </nav>

        <GameBoard />

      </div>
    );
  }
}

export default App;
