import React, { useState} from 'react'
/* import {randomColor} from '../Counter';
import {countToBeClicked} from '../Counter'; */
// COMPONENTS
// SASS
import { FailMessage } from '../Failure'
import { Success } from '../Success';
import { First } from './First';
import { randomColor } from './First';

let countToBeClicked = Math.floor(Math.random() * 10) + 5; 

interface State {
    level: number;
}

export const Fifth: React.FC<State> = ({level = 5}) => {
    const [count, setCount] = useState(0)
    const [counter, setCounter] = React.useState(3);
    const [reset, setReset] = useState(false)

    React.useEffect(() => {
        const timer:any =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);
    
      const resetValue = () => {
        setReset(true);
        countToBeClicked = Math.floor(Math.random() * 10) + 5; 
    }

    if (count == countToBeClicked && counter === 0) {
    return (
        <Success level={5}/>
    )
    } else if (count != countToBeClicked && counter === 0) {
    
    return (
        <div>
                {reset === false ?
                <div>
                <div className="counter-title">
                    <h2>Level {level} Failed!</h2>
                </div>
                <div className="greeting-content">Oh no! :( You clicked the button {count} times.</div>
                <div className="counter-start-button">
                    <button onClick={resetValue}>Try again</button>
                </div>
                </div> :    <First level={1}/>
            }
                
            </div>
    )
    } else {
    return (
        <div>
            <div className="counter-title">
                <h2>Level {level}</h2>
            </div>
            <div className="counter-timer counter-number-of-times">
                {counter > 0 ? counter : null}
            </div>
            <div className="counter-circle" onClick={() => setCount(count + 1)} style={{background: `#${randomColor}`}}>
            
            </div>
            <div className="counter-message">
                <p>You have to click the circle <p className="counter-number-of-times">{countToBeClicked}</p> times</p>
            </div>
        </div>
    )
    }
}
