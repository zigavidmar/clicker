import React, { useState} from 'react'
import '../sass/fireworks.scss'

// COMPONENTS
// SASS

interface State {
    level: number;
}

export const Success: React.FC<State> = ({level}) => {
    
    return (
        <div>
            <div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </div>
            <div className="counter-title">
                <h2>Congratulations</h2>
            </div>
            <div className="greeting-content">
                <p>You finished all {level} levels, which consequently makes you number 1.</p>
                <br/>
                <p>Thank you for playing the game and I wish you a great rest of the day.</p>
            </div>
        </div>
    )
} 
