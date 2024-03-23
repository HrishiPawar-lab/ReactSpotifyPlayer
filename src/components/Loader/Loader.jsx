import React from 'react'
import "./Loader.css"

const Loader = () => {
    return (
        <div>
            <div className="loader" id="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default Loader