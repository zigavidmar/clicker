import React from 'react'
import {ReactComponent as TimerIcon} from '../images/timer-icon.svg';
import {ReactComponent as DifficultyIcon} from '../images/difficulty-icon.svg';

export const Greeting: React.FC = () => {
    return (
        <div>
            <div className="counter-title">
                <h2>Welcome to Clicker</h2>
            </div>
            <div className="greeting-content">
                <p>Clicker is a simple game where clicking the right amount of times, gets you a WIN!</p>
            </div>
            <div className="greeting-footer">
                <div className="greeting-footer-left footer-item">
                    <TimerIcon/>
                    TIMER
                </div>
                <div className="greeting-footer-right footer-item">
                    DIFFICULTY
                    <DifficultyIcon/>
                </div>
            </div>
        </div>
    )
}
