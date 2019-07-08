import React, { Component } from "react"


class Tile extends Component {
    state = {
        selectedImgs: [],
        imgDisplayOrder: []
    }

    handleClick = event => {

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3">
                            <img src="https://newspress-mclaren.s3.amazonaws.com/images/hero/4546-03_McLaren+570S_NYlaunch.jpg" className="card-img" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tile