
import React from 'react'

function joinServer() {
    window.location.href = "fivem://connect/142.132.154.42:30147";
}

function ServerStatsForm() {
    return (
        <div>
            <button onClick={joinServer}>Default</button>;
            <h1>statistics:</h1>
            <h2>online players: <span>12/100</span></h2>
        </div>
    )
}

export default ServerStatsForm