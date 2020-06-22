import React, { useState} from 'react'
/* import {randomColor} from '../Counter';
import {countToBeClicked} from '../Counter'; */
// COMPONENTS
// SASS
import { FailMessage } from '../FailMessage'
import { Second } from './Second'

export const randomColor = Math.floor(Math.random()*16777215).toString(16);
export const countToBeClicked = Math.floor(Math.random() * 1) + 5; 

interface State {
    level: number;
    counter: number;
}

export const First: React.FC<State> = ({level = 1}) => {
    const [count, setCount] = useState(0)
    const [counter, setCounter] = React.useState(3);
    const [reset, setReset] = useState(false)

    React.useEffect(() => {
        const timer:any =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);

    const handleSuccess = false;
    
    const changeValue = () => {

    }
    
    if (count == countToBeClicked && counter === 0) {
    return (
        <Second level={2} counter={2}/>
    )
    } else if (count != countToBeClicked && counter === 0) {
    const handleRepeat = () => {
        console.log('test')
    }
    return (
        <div>
            {reset === false ?
            <div>
            <div>Level {level} Failed!</div>
            <div>Oh no! :(</div>
            <button onClick={() => setReset(true)}>Try again</button>
            </div> : <First level={1} counter={5}/>
        }
            
        </div>
    )
    } else {
    return (
        <div>
            <div>Level {level}</div>
            {counter > 0 ? counter : null}
            <div className="counter-circle" onClick={() => setCount(count + 1)} style={{background: `#${randomColor}`}}>
                {count}
            </div>
            <div>You have to click {countToBeClicked} times</div>
        </div>
    )
    }
}