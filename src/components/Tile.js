import React from "react"

const styles = {
    card: {
        minHeight: "200px"
    }
}

function Tile(props) {
    return (
        <div className="col-md-3">
            <div className="card text-white bg-light mb-4" style={styles.card}>
                <img src={props.image} data-id={props.dataId} className="card-img my-auto" alt={`${props.make} ${props.model}`} onClick={props.onClick} />
            </div>
        </div>
    )
}

export default Tile