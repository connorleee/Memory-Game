import React from 'react';
import './App.css';

function App() {
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

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card text-white bg-primary mb-3">
              <div class="card-body">
                <img src="https://newspress-mclaren.s3.amazonaws.com/images/hero/4546-03_McLaren+570S_NYlaunch.jpg" className="card-img" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
