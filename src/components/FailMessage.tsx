import React, { useState} from 'react'
import { First } from './levels/First'
// COMPONENTS
// SASS

interface State {
    level: number;
    counter: number;
}

export const FailMessage: React.FC<State> = () => {
    const [state, setstate] = useState(true)
    
    return (
        <div>{ state === true ? 
            <div>
            Oh noo! Now you have to repeat the drill!
            <button onClick={() => setstate(false)}>Try again!</button>
            </div> : <First level={1} counter={5}/>
            }
        </div>
    )
} 
