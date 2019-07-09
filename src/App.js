import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import GameBoard from './components/GameBoard';
import cars from "./cars.json"

class App extends Component {
  state = {
    selectedImgIds: [],
    imgDisplayOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    currentCarId: 0,
    currentScore: 0,
    highScore: 0
  }

  componentDidMount() {
    this.rndDisplayOrder()
  }

  shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  rndDisplayOrder = () => {
    let shuffCars = this.shuffle(cars)
    let newOrder = []
    for (let i = 0; i < 12; i++) {
      newOrder.push(shuffCars[i].id)
    }
    this.setState({ imgDisplayOrder: newOrder })
  }

  handleClick = (e) => {
    // need to be able to grab the key from the clicked tile. 
    // if statement or ternary statement to handle if image has been clicked or not   
    console.log(e.target)
    console.log(e.target.getAttribute("data-id"))

    const imgSelectedId = e.target.getAttribute("data-id")
    const imgSelectedPrev = this.state.selectedImgIds.includes(e.target.getAttribute("data-id"))

    console.log(this.state.selectedImgIds)
    console.log(imgSelectedPrev)

    if (imgSelectedPrev) {
      alert(`Game Over!\n\nYou have already selected this image.\n\nClick "OK" to play again!`)
      this.setState({
        currentScore: 0,
        selectedImgIds: []
      })
    } else {
      if (this.state.currentScore < this.state.highScore) {
        this.setState({
          currentScore: this.state.currentScore + 1,
          selectedImgId: this.state.selectedImgIds.push(imgSelectedId)
        })
      } else {
        this.setState({
          currentScore: this.state.currentScore +1,
          highScore: this.state.highScore + 1,
          selectedImgId: this.state.selectedImgIds.push(imgSelectedId)
        })
      }
    }
  }

  render() {
    return (
      <div>
        <NavBar currentScore={this.state.currentScore} highScore={this.state.highScore} />
        <GameBoard
          imgDisplayOrder={this.state.imgDisplayOrder}
          cars={cars}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
