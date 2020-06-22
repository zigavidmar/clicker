import React from 'react'

export const Greeting: React.FC = () => {
    return (
        <div>
            <div className="greeting-title">
                <h1>Welcome</h1>
                <p>This is simple clicking game. You'll get a value how many times a circle needs to be clicked.</p>
                <p>If you click to many times: You lose</p>
                <p>If you click the right amount of times: You survice</p>
                <p>And btw: you have to get it in time :D</p>
            </div>
        </div>
    )
}
