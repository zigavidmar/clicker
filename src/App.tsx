import React from 'react'
import { Counter } from './components/Counter'
import { Greeting } from './components/Greeting'

export const App: React.FC = () => {
    return (
        <div>
            <Counter text={<Greeting/>}/>
        </div>
    )
}
