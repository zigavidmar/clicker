import React, { useState} from 'react'
// COMPONENTS
import { Greeting } from './components/Greeting'
// SASS
import './sass/counter.scss'
import './sass/footer.scss'
import { First } from './components/levels/First'


export const App: React.FC = () => {
    const [status, setStatus] = useState(<Greeting/>)
    const [state, setState] = useState(true)

    const changeState = () => {
        setStatus(<First level={1}/>);
        setState(false);
    }
    return (
        <div>
            <div className="counter-wrapper">
                {status}
                { state === true ? <button onClick={changeState}>Start</button> : null }
            </div>
            <div className="footer-wrapper">
                moji logoti
            </div>
        </div>
    )
}
