import React from "react"

function Tile(props) {
    return (
        <div className="col-md-3">
            <div className="card text-white bg-primary mb-3">
                <img src={props.image} className="card-img" alt={`${props.make} ${props.model}`} />
            </div>
        </div>
    )
}

export default Tile