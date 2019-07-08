import React, { Component } from "react"
import cars from "../cars.json"

class Tile extends Component {
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
                    <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3">
                            <img src={this.state.cars[carId].image} key={carId} className="card-img" alt="" />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Tile