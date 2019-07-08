import React, { Component } from "react"
import cars from "../cars.json"
import Tile from "./Tile"

class GameBoard extends Component {
    state = {
        selectedImgs: [],
        imgDisplayOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        cars: cars
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

    handleClick = event => {

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.imgDisplayOrder.map(carId => (
                        <Tile key={carId} image={this.state.cars[carId].image} make={this.state.cars[carId].make} model={this.state.cars[carId].model} />
                    ))}
                </div>
            </div>
        )
    }
}

export default GameBoard