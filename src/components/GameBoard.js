import React from "react"
// import cars from "../cars.json"
import Tile from "./Tile"

function GameBoard(props) {
    return (
        <div className="container">
            <div className="row">
                {props.imgDisplayOrder.map(carId => (
                    <Tile
                        key={carId}
                        dataId={props.cars[carId].id}
                        onClick={props.handleClick}
                        image={props.cars[carId].image}
                        make={props.cars[carId].make}
                        model={props.cars[carId].model} />
                ))}
            </div>
        </div>
    )
}

export default GameBoard