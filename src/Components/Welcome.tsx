import * as React from 'react'

export const Welcome = () =>
    <div>
        <div className="welcome">
            <h1>I am <span className="font-brown">root</span>!</h1>
            <p>I am a cybernetic <span className="font-brown">organism</span>. Living components, classes, queries, services and templates over a HTML endoskeleton.</p>
            <p>My mission is to execute and interpret commands submitted by <span className="font-brown">you</span>!</p>
            <p>You can start by type and submit the command <span className="font-brown">help</span> or <span className="font-brown">about -i root</span>.</p>
        </div>
    </div>

export default Welcome