import React from 'react'
import Ball from'../assets/ball.gif';


function Loader() {
    return (
        <div className="loader-container fixed left-0 top-0 w-full h-full">
            <img src={Ball} alt="" className="loader top-1/4 z-10 absolute"/>
            <p className="loader-text top-2/4 z-10 absolute">Loading...</p>
        </div>
    )
}

export default Loader
