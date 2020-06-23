import React, { useState} from 'react'
import { First } from './levels/First'
// COMPONENTS
// SASS

interface State {
    level: number;
}

export const Success: React.FC<State> = ({level}) => {
    
    return (
        <div>
            Success {level}
        </div>
    )
} 
