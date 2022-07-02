
import React from 'react'

import sample from '../travis.mp4';




function joinServer() {
    window.location.href = "fivem://connect/142.132.154.42:30147";
}

function ServerStatsForm() {
    return (
        <div id="sts">
            <video className='videoTag' autoPlay loop id="myVideo">
                <source src={sample} type='video/mp4' />
            </video>
            <div className="content">
                <h1>OG's Street</h1>
                <center>
                <button id="myBtn" onClick="">Pause</button>
                <button id="myBtn" onClick="">Whitelist</button>
                <button id="myBtn" onClick={joinServer}>Join</button>
                </center>
            </div>
        </div>
    )
}

export default ServerStatsForm