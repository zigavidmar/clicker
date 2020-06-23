import React, { useState} from 'react'
/* import {randomColor} from '../Counter';
import {countToBeClicked} from '../Counter'; */
// COMPONENTS
// SASS
import { FailMessage } from '../Failure'
import { Fifth } from './Fifth';
import { First } from './First';

export const randomColor = Math.floor(Math.random()*16777215).toString(16);
export const countToBeClicked = Math.floor(Math.random() * 10) + 5; 

interface State {
    level: number;
}

export const Fourth: React.FC<State> = ({level = 4}) => {
    const [count, setCount] = useState(0)
    const [counter, setCounter] = React.useState(3);
    const [reset, setReset] = useState(false)

    React.useEffect(() => {
        const timer:any =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);
    
      if (count == countToBeClicked && counter === 0) {
        return (
            <Fifth level={5}/>
        )
        } else if (count != countToBeClicked && counter === 0) {
        return (
            <div>
                {reset === false ?
                <div>
                <div>Level {level} Failed!</div>
                <div>Oh no! :(</div>
                <button onClick={() => setReset(true)}>Try again</button>
                </div> :    <First level={1}/>
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