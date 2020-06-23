import React, { useState} from 'react'
// COMPONENTS
import { Greeting } from './components/Greeting'
// SASS
import './sass/counter.scss'
import './sass/footer.scss'
import { First } from './components/levels/First'
import {ReactComponent as GithubIcon} from './images/github-icon.svg';
import {ReactComponent as MailIcon} from './images/mail-icon.svg';



export const App: React.FC = () => {
    const [status, setStatus] = useState(<Greeting/>)
    const [state, setState] = useState(true)

    const changeState = () => {
        setStatus(<First level={1}/>);
        setState(false);
    }
    return (
        <div>
            <div className="header-wrapper">
                <h1>Clicker</h1>
            </div>
            <div className="counter-wrapper">
                    {status}
                <div className="counter-start-button">{ state === true ? <button onClick={changeState}>Start</button> : null }</div>
            </div>
            <div className="footer-wrapper">
                <a href="mailto: zigavidmar96@gmail.com"><MailIcon/></a>
                <a target="_blank" href="https://github.com/zigavidmar"><GithubIcon/></a>
            </div>
        </div>
    )
}
